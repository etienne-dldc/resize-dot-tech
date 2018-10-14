import * as React from 'react';
import Button from '../Button';
import { Column, Wrapper } from './elements';
import { ConnectProps, connect } from 'src/logic';
import Settings from '../Settings';
import DropZoneBox from '../DropZoneBox';
import FilesBox from '../FilesBox';

type Props = ConnectProps & {};

class App extends React.PureComponent<Props> {
  public render() {
    const { app } = this.props;
    return (
      <Wrapper>
        <Column>
          <Settings />
        </Column>
        <Column>
          <DropZoneBox />
          <FilesBox />
          {app.state.files.length > 0 && <Button onClick={this.processFiles}>Run</Button>}
        </Column>
      </Wrapper>
    );
  }

  private processFiles = async () => {
    this.props.app.actions.processAndDowloadZip();
  };
}

export default connect(App);
