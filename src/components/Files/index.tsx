import * as React from 'react';
import { ConnectProps, connect } from '../../logic';
import posed, { PoseGroup } from 'react-pose';
import FileLine from '../FileLine';
import { Container } from './elements';
import { Card, H5 } from '@blueprintjs/core';
import DropArea from '../DropArea';

type FilesBoxProps = ConnectProps;

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

class Files extends React.PureComponent<FilesBoxProps> {
  public render() {
    const { app } = this.props;
    return (
      <Card>
        <H5>Files</H5>
        <Container>
          <PoseGroup>
            {app.state.files.map((file, index) => (
              <ListItem key={file.id}>
                <FileLine file={file} fileIndex={index} />
              </ListItem>
            ))}
          </PoseGroup>
        </Container>
        <DropArea />
      </Card>
    );
  }
}

export default connect(Files);
