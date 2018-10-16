import { ConnectProps, connect } from 'src/logic';
import * as React from 'react';
import Box from '../Box';
import Dropzone, { FileWithPreview } from 'react-dropzone';
import { DropText, DropBoxAnimated } from './elements';
import HoverProvider from '../HoverProvider';

type Props = ConnectProps;

class DropZoneBox extends React.PureComponent<Props> {
  public render() {
    return (
      <Box>
        <HoverProvider>
          {hoverParams => (
            <DropBoxAnimated
              gradient="blue"
              pose={hoverParams.hover ? 'hover' : 'init'}
              innerRef={hoverParams.ref as any}
            >
              <Dropzone style={{}} accept="image/*" onDrop={this.onDrop}>
                <DropText>
                  Drop files here
                  <br />
                  Or click to select
                </DropText>
              </Dropzone>
            </DropBoxAnimated>
          )}
        </HoverProvider>
      </Box>
    );
  }

  private onDrop = async (acceptedFiles: Array<FileWithPreview>, rejectedFiles: Array<FileWithPreview>) => {
    console.log({ rejectedFiles, acceptedFiles });
    this.props.app.actions.addImages(acceptedFiles);
  };
}

export default connect(DropZoneBox);
