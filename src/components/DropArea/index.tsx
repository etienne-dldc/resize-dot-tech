import { ConnectProps, connect } from '../../logic';
import * as React from 'react';
import Dropzone from 'react-dropzone';
import { DropText, Container } from './elements';
import HoverProvider from '../HoverProvider';
import { Button, Card, Elevation } from '@blueprintjs/core';

type Props = ConnectProps;

class DropArea extends React.PureComponent<Props> {
  public render() {
    return (
      <Container>
        <Dropzone style={{}} accept="image/*" onDrop={this.onDrop}>
          <DropText>
            Drop files here
            <br />
            Or click to select
          </DropText>
        </Dropzone>
      </Container>
    );
  }

  private onDrop = async (acceptedFiles: Array<File>, rejectedFiles: Array<File>) => {
    console.log({ rejectedFiles, acceptedFiles });
    this.props.app.actions.addImages(acceptedFiles);
  };
}

export default connect(DropArea);
