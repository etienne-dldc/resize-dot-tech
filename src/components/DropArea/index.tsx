import React from 'react';
import { useDropzone, FileRejection } from 'react-dropzone';
import { DropText, Container } from './elements';
import { useSelector } from '../../select';

export const DropArea: React.FC = React.memo(() => {
  const addImages = useSelector((s) => s.addImage);

  const onDrop = React.useCallback(
    async (acceptedFiles: Array<File>, rejectedFiles: Array<FileRejection>) => {
      addImages(acceptedFiles);
    },
    [addImages]
  );
  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    onDrop,
  });

  return (
    <Container>
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        <DropText>
          Drop files here
          <br />
          Or click to select
        </DropText>
      </div>
    </Container>
  );
});
