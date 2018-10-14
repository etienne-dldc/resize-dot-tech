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
import { ConnectProps, connect } from 'src/logic';
import { StateImageId } from 'src/logic/state';
import Settings from './Settings';

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

type Props = ConnectProps & {};

class App extends React.PureComponent<Props> {
  public render() {
    const { app } = this.props;
    return (
      <Wrapper>
        <Column>
          <Settings />
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
    this.props.app.actions.processAndDowloadZip();
  };
}

export default connect(App);
