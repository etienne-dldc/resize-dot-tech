import * as React from 'react';
import { ConnectProps, connect } from 'src/logic';
import Box, { BoxHeader } from '../Box';
import posed, { PoseGroup } from 'react-pose';
import FileLine from '../FileLine';
import { Container } from './elements';

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

class FilesBox extends React.PureComponent<FilesBoxProps> {
  public render() {
    const { app } = this.props;
    return (
      <Box>
        <BoxHeader gradient="red">Files</BoxHeader>
        <Container>
          <PoseGroup>
            {app.state.files.map(file => (
              <ListItem key={file.id}>
                <FileLine fileId={file.id} />
              </ListItem>
            ))}
          </PoseGroup>
        </Container>
      </Box>
    );
  }
}

export default connect(FilesBox);
