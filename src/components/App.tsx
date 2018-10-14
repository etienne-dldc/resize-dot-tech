import * as React from 'react';
import Dropzone, { FileWithPreview } from 'react-dropzone';
import Button from './Button';
import Wrapper from './Wrapper';
import Column from './Column';
import Box from './Box';
import Header from './Header';
import DropBox from './DropBox';
import posed, { PoseGroup } from 'react-pose';
import styled from 'react-emotion';
import * as JSZip from 'jszip';
import * as saveAs from 'file-saver';
import { ConnectProps, connect } from 'src/logic';
import { OutputMimeType, StateImage, Settings, StateImageId } from 'src/logic/state';
// import Slider from 'rc-slider';

const FileItem = posed.div({
  enter: {
    x: 0,
    opacity: 1,
  },
  exit: {
    x: 50,
    opacity: 0,
  },
});

const Container = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'stretch',
});

// const FilesContainer = posed(Container)({
//   main: {
//     // beforeChildren: true,
//     flip: true,
//   },
// });

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

function resize(file: FileWithInfo, settings: Settings): Promise<Blob> {
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
      settings.quality
    );
  });
}

async function processImage(file: StateImage, settings: Settings) {
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

function proccessImages(files: Array<StateImage>, settings: Settings) {
  return Promise.all(files.map(f => processImage(f, settings)));
}

const extensions: { [K in OutputMimeType]: string } = {
  [OutputMimeType.jpeg]: 'jpg',
  [OutputMimeType.png]: 'png',
  [OutputMimeType.webp]: 'webp',
};

type Props = ConnectProps & {};

class App extends React.PureComponent<Props> {
  public render() {
    const { app } = this.props;
    return (
      <Wrapper>
        <Column>
          <Box>
            <Header gradient="pink">settings</Header>
            <p>Format</p>
            {[OutputMimeType.jpeg, OutputMimeType.png, OutputMimeType.webp].map(k => {
              const onClick = () => {
                // this.setState(prevState => ({ ...prevState, settings: { ...prevState.settings, type: k } }));
              };
              return (
                // tslint:disable-next-line:jsx-no-lambda
                <div key={k} onClick={onClick}>
                  {k === app.state.settings.type && ' > '}
                  {k}
                </div>
              );
            })}
          </Box>
        </Column>
        <Column>
          <Box>
            <DropBox gradient="blue">
              <Dropzone style={{}} accept="image/*" onDrop={this.onDrop}>
                Drop files here
              </Dropzone>
            </DropBox>
          </Box>
          <Box>
            <Header gradient="red">Files</Header>
            <Container>
              <PoseGroup>
                {app.state.files.map(file => (
                  <FileItem key={file.id}>
                    {file.input.name}
                    <Button<string> params={file.id} onClick={this.removeImage}>
                      Delete
                    </Button>
                  </FileItem>
                ))}
              </PoseGroup>
            </Container>
          </Box>
          {app.state.files.length > 0 && <Button onClick={this.processFiles}>Run</Button>}
        </Column>
      </Wrapper>
    );
  }

  private removeImage = (imageId: StateImageId) => {
    this.props.app.actions.removeImage(imageId);
  };

  private onDrop = async (acceptedFiles: Array<FileWithPreview>, rejectedFiles: Array<FileWithPreview>) => {
    console.log({ rejectedFiles, acceptedFiles });
    this.props.app.actions.addImages(acceptedFiles);
  };

  private processFiles = async () => {
    const proccessed = await proccessImages(this.props.app.state.files, this.props.app.state.settings);
    const zip = new JSZip();
    proccessed.forEach(file => {
      zip.file(file.infos.name + '.' + extensions[this.props.app.state.settings.type], file.output);
    });

    zip.generateAsync({ type: 'blob' }).then(content => {
      // see FileSaver.js
      saveAs(content, 'example.zip');
    });
  };
}

export default connect(App);
