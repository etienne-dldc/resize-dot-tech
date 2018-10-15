import * as React from 'react';
import { ConnectProps, connect } from 'src/logic';
import { StateImage } from 'src/logic/state';
import Button from '../Button';
import { Container, Name, Details, Header, ButtonWrapper } from './elements';
import HoverProvider from '../HoverProvider';

type FileLineProps = ConnectProps & { file: StateImage };

class FileLine extends React.PureComponent<FileLineProps> {
  public render() {
    const { file } = this.props;
    return (
      <Container>
        <HoverProvider>
          {hoverParams => (
            <Header onClick={this.toggle} innerRef={hoverParams.ref}>
              <Name>{file.input.name}</Name>
              <ButtonWrapper pose={hoverParams.hover ? 'show' : 'hide'}>
                <Button onClick={this.removeImage}>Delete</Button>
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
    this.props.app.actions.removeImage(this.props.file.id);
  };

  private toggle = () => {
    this.props.app.actions.toggleExpandItem(this.props.file.id);
  };
}

export default connect(FileLine);
