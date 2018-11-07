import { useOvermind } from '../../logic';
import * as React from 'react';
import Dropzone from 'react-dropzone';
import { DropText, Container } from './elements';

type Props = {};

const DropArea: React.SFC<Props> = () => {
  const app = useOvermind();
  const onDrop = React.useMemo(
    () => (acceptedFiles: Array<File>, rejectedFiles: Array<File>) => {
      console.log({ rejectedFiles, acceptedFiles });
      app.actions.addImages(acceptedFiles);
    },
    []
  );
  return (
    <Container>
      <Dropzone style={{}} accept="image/*" onDrop={onDrop}>
        <DropText>
          Drop files here
          <br />
          Or click to select
        </DropText>
      </Dropzone>
    </Container>
  );
};

export default DropArea;
