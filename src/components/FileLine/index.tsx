import * as React from 'react';
import { ConnectProps, connect } from 'src/logic';
import { StateImageId } from 'src/logic/state';
import Button from '../Button';
import { Container, Name } from './elements';

type FileLineProps = ConnectProps & { fileId: StateImageId };

class FileLine extends React.PureComponent<FileLineProps> {
  public render() {
    const { app, fileId } = this.props;
    const file = app.state.files.find(f => f.id === fileId);
    if (!file) {
      return null;
    }
    return (
      <Container>
        <Name>{file.input.name}</Name>
        <Button<string> params={file.id} onClick={this.removeImage}>
          Delete
        </Button>
      </Container>
    );
  }

  private removeImage = (imageId: StateImageId) => {
    this.props.app.actions.removeImage(imageId);
  };
}

export default connect(FileLine);
