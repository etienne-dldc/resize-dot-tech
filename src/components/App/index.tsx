import * as React from 'react';
import Button from '../Button';
import { Column, Wrapper } from './elements';
import { ConnectProps, connect } from 'src/logic';
import Settings from '../Settings';
import DropZoneBox from '../DropZoneBox';
import FilesBox from '../FilesBox';
import Box from '../Box';

type Props = ConnectProps & {};

class App extends React.PureComponent<Props> {
  public render() {
    const { app } = this.props;
    const hasFiles = app.state.files.length > 0;
    return (
      <Wrapper>
        {hasFiles && (
          <Column>
            <Settings />
          </Column>
        )}
        <Column>
          <DropZoneBox />
          {hasFiles && <FilesBox />}
          {hasFiles && (
            <Box>
              <Button big={true} onClick={this.processFiles}>
                Run
              </Button>
            </Box>
          )}
        </Column>
      </Wrapper>
    );
  }

  private processFiles = async () => {
    this.props.app.actions.processAndDowloadZip();
  };
}

export default connect(App);
