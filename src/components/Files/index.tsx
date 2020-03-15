import React from 'react';
import posed, { PoseGroup } from 'react-pose';
import { FileLine } from '../FileLine';
import { Container } from './elements';
import { Card, H5 } from '@blueprintjs/core';
import { DropArea } from '../DropArea';
import { useSelector } from '../../select';

const ListItem = posed.div({
  init: {
    x: -50,
    opacity: 0
  },
  enter: {
    x: 0,
    opacity: 1
  },
  exit: {
    x: 50,
    opacity: 0
  }
});

export const Files = React.memo(() => {
  const files = useSelector(s => s.files);

  return (
    <Card>
      <H5>Files</H5>
      <Container>
        <PoseGroup>
          {files.map((file, index) => (
            <ListItem key={file.id}>
              <FileLine file={file} fileIndex={index} />
            </ListItem>
          ))}
        </PoseGroup>
      </Container>
      <DropArea />
    </Card>
  );
});
