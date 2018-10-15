import * as React from 'react';
import { ConnectProps, connect } from 'src/logic';
import { StateImageId } from 'src/logic/state';
import Button from '../Button';
import { Container, Name, Details, Header, ButtonWrapper } from './elements';
import HoverProvider from '../HoverProvider';

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
        <HoverProvider>
          {hoverParams => (
            <Header onClick={this.toggle} innerRef={hoverParams.ref}>
              <Name>{file.input.name}</Name>
              <ButtonWrapper pose={hoverParams.hover || true ? 'show' : 'hide'}>
                <Button onClick={this.removeImage}>
                  Delete <br />
                  Yolo
                </Button>
              </ButtonWrapper>
            </Header>
          )}
        </HoverProvider>
        {file.expanded && (
          <Details>
            <p>Yolo</p>
          </Details>
        )}
      </Container>
    );
  }

  private removeImage = () => {
    this.props.app.actions.removeImage(this.props.fileId);
  };

  private toggle = () => {
    this.props.app.actions.toggleExpandItem(this.props.fileId);
  };
}

export default connect(FileLine);
