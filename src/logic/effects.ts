import * as createUuid from 'uuid/v4';
import { StateImage, StateSettings, OutputMimeType } from './state';
import * as saveAsFunction from 'file-saver';
import { FileWithPreview } from 'react-dropzone';
import * as JSZip from 'jszip';

export const uuid = createUuid;

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

function getImageDataURL(file: FileWithPreview): Promise<string> {
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

function getImageInfo(file: FileWithContent): Promise<FileWithInfo> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = file.dataURL;
    img.onload = () => {
      resolve({
        ...file,
        width: img.width,
        height: img.height,
        img,
      });
    };
  });
}

function getNewSize(width: number, height: number): { width: number; height: number } {
  if (width < 1600 && height < 1600) {
    return { width, height };
  }
  const scale = width > height ? 1600 / width : 1600 / height;
  return { width: width * scale, height: height * scale };
}

function resize(file: FileWithInfo, settings: StateSettings): Promise<Blob> {
  return new Promise((resolve, reject) => {
    const { height, width } = getNewSize(file.width, file.height);
    const elem = document.createElement('canvas');
    elem.width = width;
    elem.height = height;
    const ctx = elem.getContext('2d') as CanvasRenderingContext2D;
    // img.width and img.height will give the original dimensions
    ctx.drawImage(file.img, 0, 0, width, height);
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
  const output = await resize(infos, settings);
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
  resize,
  processImage,
  proccessImages,
  downloadZip,
};
