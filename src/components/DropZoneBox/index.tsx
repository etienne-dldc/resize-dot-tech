import { ConnectProps, connect } from 'src/logic';
import * as React from 'react';
import Box from '../Box';
import Dropzone, { FileWithPreview } from 'react-dropzone';
import { DropBox, DropText } from './elements';

type Props = ConnectProps;

class DropZoneBox extends React.PureComponent<Props> {
  public render() {
    return (
      <Box>
        <DropBox gradient="blue">
          <Dropzone style={{}} accept="image/*" onDrop={this.onDrop}>
            <DropText>
              Drop files here
              <br />
              Or click to select
            </DropText>
          </Dropzone>
        </DropBox>
      </Box>
    );
  }

  private onDrop = async (acceptedFiles: Array<FileWithPreview>, rejectedFiles: Array<FileWithPreview>) => {
    console.log({ rejectedFiles, acceptedFiles });
    this.props.app.actions.addImages(acceptedFiles);
  };
}

export default connect(DropZoneBox);
