import React from 'react';
import Dropzone from 'react-dropzone';
import { DropText, Container } from './elements';
import { useSelector } from '../../select';

export const DropArea: React.FC = React.memo(() => {
  const addImages = useSelector(s => s.addImage);

  const onDrop = React.useCallback(
    async (acceptedFiles: Array<File>, rejectedFiles: Array<File>) => {
      console.log({ rejectedFiles, acceptedFiles });
      addImages(acceptedFiles);
    },
    [addImages]
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
});
