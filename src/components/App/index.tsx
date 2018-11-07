import * as React from 'react';
import { Column, Colums, Wrapper, Footer, Link, FooterContent } from './elements';
import { useOvermind } from '../../logic';
import Settings from '../Settings';
import DropArea from '../DropArea';
import Files from '../Files';
import Logo from '../Logo';
import { Classes, Button, Card, Icon } from '@blueprintjs/core';

type Props = {};

const App: React.SFC<Props> = () => {
  const app = useOvermind();
  const processFiles = React.useMemo(() => () => app.actions.processAndDowloadZip(), []);
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
              onClick={processFiles}
            >
              Run
            </Button>
          )}
        </Column>
      </Colums>
      <Footer>
        <FooterContent>
          Made with <Icon icon="code" iconSize={15} /> by{' '}
          <Link href="https://twitter.com/Etienne_dot_js">@Etienne_dot_js</Link>
        </FooterContent>
        <FooterContent>
          Code available on{' '}
          <Link href="https://github.com/etienne-dldc/resize-dot-tech">
            <Icon icon="git-repo" iconSize={15} /> Github
          </Link>
        </FooterContent>
      </Footer>
    </Wrapper>
  );
};

export default App;
