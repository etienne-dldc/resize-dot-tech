import * as createUuid from 'uuid/v4';
import { StateImage, StateSettings, OutputMimeType } from './state';
import * as saveAsFunction from 'file-saver';
import JSZip from 'jszip';

export const uuid: () => string = createUuid as any;

export const dowloadFile = saveAsFunction;

interface FileWithContent {
  dataURL: string;
  name: string;
  size: number;
}

interface FileWithInfo extends FileWithContent {
  width: number;
  height: number;
  img: HTMLImageElement;
}

const extensions: { [K in OutputMimeType]: string } = {
  [OutputMimeType.jpeg]: 'jpg',
  [OutputMimeType.png]: 'png',
  [OutputMimeType.webp]: 'webp',
};

function getImageDataURL(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = event => {
      resolve(reader.result as string);
    };
    reader.onabort = () => {
      reject();
    };
    reader.onerror = () => {
      reject();
    };
    reader.readAsDataURL(file);
  });
}

function removeExtensions(name: string): string {
  const parts = name.split('.');
  return parts.slice(0, -1).join('.');
}

function getImageInfo(file: FileWithContent): Promise<FileWithInfo> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = file.dataURL;
    img.onload = () => {
      resolve({
        ...file,
        name: removeExtensions(file.name),
        width: img.width,
        height: img.height,
        img,
      });
    };
  });
}

function getNewSize(width: number, height: number, max: number): { width: number; height: number } {
  if (width < max && height < max) {
    return { width, height };
  }
  const scale = max / Math.max(width, height);
  return { width: width * scale, height: height * scale };
}

function canvasWork(file: FileWithInfo, settings: StateSettings): Promise<Blob> {
  return new Promise((resolve, reject) => {
    const { height, width } = getNewSize(file.width, file.height, settings.maxSize || 1600);
    const elem = document.createElement('canvas');
    elem.width = width;
    elem.height = height;
    const ctx = elem.getContext('2d') as CanvasRenderingContext2D;
    // img.width and img.height will give the original dimensions
    ctx.drawImage(file.img, 0, 0, width, height);
    // watermark
    if (settings.watermark.enabled) {
      ctx.font = `${settings.watermark.size}px Roboto`;
      ctx.fillStyle = `rgba(255, 255, 255, ${settings.watermark.opacity / 100})`;
      ctx.textAlign = 'end';
      ctx.textBaseline = 'bottom';
      ctx.fillText(settings.watermark.text, width - 20, height - 20);
    }
    ctx.canvas.toBlob(
      blob => {
        if (!blob) {
          reject();
          return;
        }
        const output = new File([blob], file.name, {
          type: settings.type,
          lastModified: Date.now(),
        });
        resolve(output);
      },
      settings.type,
      settings.quality / 100
    );
  });
}

async function processImage(file: StateImage, settings: StateSettings) {
  const content = await getImageDataURL(file.input);
  const infos = await getImageInfo({
    dataURL: content,
    name: file.input.name,
    size: file.input.size,
  });
  const output = await canvasWork(infos, settings);
  return {
    infos,
    output,
  };
}

function proccessImages(files: Array<StateImage>, settings: StateSettings) {
  return Promise.all(files.map(f => processImage(f, settings)));
}

async function downloadZip(files: Array<StateImage>, settings: StateSettings) {
  const proccessed = await proccessImages(files, settings);
  const zip = new JSZip();
  proccessed.forEach(file => {
    zip.file(file.infos.name + '.' + extensions[settings.type], file.output);
  });
  zip.generateAsync({ type: 'blob' }).then(content => {
    // see FileSaver.js
    saveAs(content, 'example.zip');
  });
}

export const imageTools = {
  getImageDataURL,
  getImageInfo,
  getNewSize,
  canvasWork,
  processImage,
  proccessImages,
  downloadZip,
};
