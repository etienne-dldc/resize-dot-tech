import * as React from 'react';
import { Column, Wrapper } from './elements';
import { ConnectProps, connect } from '../../logic';
import Settings from '../Settings';
import DropArea from '../DropArea';
import Files from '../Files';
import { Classes, Button, Card } from '@blueprintjs/core';

type Props = ConnectProps & {};

class App extends React.PureComponent<Props> {
  public render() {
    const { app } = this.props;
    const hasFiles = app.state.files.length > 0;
    return (
      <Wrapper className={Classes.DARK}>
        {hasFiles && (
          <Column>
            <Settings />
          </Column>
        )}
        <Column>
          {!hasFiles && (
            <Card>
              <DropArea />
            </Card>
          )}
          {hasFiles && <Files />}
          {hasFiles && (
            <Button
              loading={app.state.running}
              intent="primary"
              icon="cloud-download"
              large={true}
              onClick={this.processFiles}
            >
              Run
            </Button>
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
