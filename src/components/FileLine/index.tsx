import * as React from 'react';
import { useOvermind } from '../../logic';
import { Container, Name, Details, Header, ButtonWrapper } from './elements';
import HoverProvider from '../HoverProvider';
import { StateImage, StateImageId } from '../../logic/state';
import { Button } from '@blueprintjs/core';

type FileLineProps = { fileId: StateImageId; fileIndex: number };

const FileLine: React.SFC<FileLineProps> = ({ fileId, fileIndex }) => {
  const app = useOvermind();
  const file = app.state.files[fileIndex];

  const removeImage = React.useMemo(
    () => (e: React.MouseEvent) => {
      app.actions.removeImage(file.id);
      e.stopPropagation();
    },
    [fileId, fileIndex]
  );

  const toggle = React.useMemo(
    () => (e: React.MouseEvent) => {
      app.actions.toggleExpandItem(file.id);
      e.stopPropagation();
    },
    [file]
  );

  if (!file) {
    console.log('no file ?');
    return null;
  }

  return (
    <Container isEven={fileIndex % 2 === 0}>
      <HoverProvider>
        {hoverParams => (
          <Header onClick={toggle} innerRef={hoverParams.ref}>
            <Name>{file.input.name}</Name>
            <ButtonWrapper pose={hoverParams.hover ? 'show' : 'hide'}>
              <Button icon="trash" intent="danger" onClick={removeImage}>
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
};

export default FileLine;
