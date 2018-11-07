import * as React from 'react';
import { ConnectProps, connect, useOvermind } from '../../logic';
import posed, { PoseGroup } from 'react-pose';
import FileLine from '../FileLine';
import { Container } from './elements';
import { Card, H5 } from '@blueprintjs/core';
import DropArea from '../DropArea';

type FilesBoxProps = {};

const ListItem = posed.div({
  init: {
    x: -50,
    opacity: 0,
  },
  enter: {
    x: 0,
    opacity: 1,
  },
  exit: {
    x: 50,
    opacity: 0,
  },
});

const Files: React.SFC<FilesBoxProps> = ({}) => {
  const app = useOvermind();
  return (
    <Card>
      <H5>Files</H5>
      <Container>
        <PoseGroup>
          {app.state.files.map((file, index) => (
            <ListItem key={file.id}>
              <FileLine fileId={file.id} fileIndex={index} />
            </ListItem>
          ))}
        </PoseGroup>
      </Container>
      <DropArea />
    </Card>
  );
};

export default Files;
