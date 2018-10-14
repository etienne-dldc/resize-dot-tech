import * as React from 'react';
import { ConnectProps, connect } from 'src/logic';
import Box, { BoxHeader } from '../Box';
import posed, { PoseGroup } from 'react-pose';
import styled from 'react-emotion';
import { StateImageId } from 'src/logic/state';
import Button from '../Button';

type FilesBoxProps = ConnectProps;

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

class FilesBox extends React.PureComponent<FilesBoxProps, any> {
  public render() {
    const { app } = this.props;
    return (
      <Box>
        <BoxHeader gradient="red">Files</BoxHeader>
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
    );
  }

  private removeImage = (imageId: StateImageId) => {
    this.props.app.actions.removeImage(imageId);
  };
}

export default connect(FilesBox);
