import * as React from 'react';
import { ConnectProps, connect } from '../../logic';
import { Container, Name, Details, Header, ButtonWrapper } from './elements';
import HoverProvider from '../HoverProvider';
import { StateImage } from '../../logic/state';
import { Button } from '@blueprintjs/core';

type FileLineProps = ConnectProps & { file: StateImage; fileIndex: number };

class FileLine extends React.PureComponent<FileLineProps> {
  public render() {
    const { file, fileIndex } = this.props;
    return (
      <Container isEven={fileIndex % 2 === 0}>
        <HoverProvider>
          {hoverParams => (
            <Header onClick={this.toggle} innerRef={hoverParams.ref}>
              <Name>{file.input.name}</Name>
              <ButtonWrapper pose={hoverParams.hover ? 'show' : 'hide'}>
                <Button icon="trash" intent="danger" onClick={this.removeImage}>
                  Delete
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
    this.props.app.actions.removeImage(this.props.file.id);
  };

  private toggle = () => {
    // this.props.app.actions.toggleExpandItem(this.props.file.id);
  };
}

export default connect(FileLine);
