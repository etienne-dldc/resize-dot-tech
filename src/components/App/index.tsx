import * as React from 'react';
import { Column, Colums, Wrapper, Footer, Link } from './elements';
import { ConnectProps, connect } from '../../logic';
import Settings from '../Settings';
import DropArea from '../DropArea';
import Files from '../Files';
import Logo from '../Logo';
import { Classes, Button, Card, Icon } from '@blueprintjs/core';

type Props = ConnectProps & {};

class App extends React.PureComponent<Props> {
  public render() {
    const { app } = this.props;
    const hasFiles = app.state.files.length > 0;
    return (
      <Wrapper className={Classes.DARK}>
        <Logo />
        <Colums>
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
        </Colums>
        <Footer>
          Made with <Icon icon="code" iconSize={15} /> by{' '}
          <Link href="https://twitter.com/Etienne_dot_js">@Etienne_dot_js</Link>
          {' - '}
          Code available on{' '}
          <Link href="https://github.com/etienne-dldc/bulk-image-tool">
            <Icon icon="git-repo" iconSize={15} /> Github
          </Link>
        </Footer>
      </Wrapper>
    );
  }

  private processFiles = async () => {
    this.props.app.actions.processAndDowloadZip();
  };
}

export default connect(App);
