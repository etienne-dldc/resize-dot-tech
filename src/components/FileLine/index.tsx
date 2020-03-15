import React from 'react';
import { Container, Name, Details, Header, ButtonWrapper } from './elements';
import { HoverProvider } from '../HoverProvider';
import { Button } from '@blueprintjs/core';
import { StateImage } from '../../store/AppStore';
import { useSelector } from '../../select';

type FileLineProps = { file: StateImage; fileIndex: number };

export const FileLine = React.memo<FileLineProps>(({ file, fileIndex }) => {
  const removeImage = useSelector(s => s.removeImage);

  const removeCurrentImage = React.useCallback(() => {
    removeImage(file.id);
  }, [file.id, removeImage]);

  const toggle = React.useCallback(() => {
    // this.props.app.actions.toggleExpandItem(this.props.file.id);
  }, []);

  return (
    <Container isEven={fileIndex % 2 === 0}>
      <HoverProvider>
        {hoverParams => (
          <Header onClick={toggle} ref={hoverParams.ref as any}>
            <Name>{file.input.name}</Name>
            <ButtonWrapper pose={hoverParams.hover ? 'show' : 'hide'}>
              <Button icon="trash" intent="danger" onClick={removeCurrentImage}>
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
});
