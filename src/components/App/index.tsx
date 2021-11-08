import React from 'react';
import { Column, Colums, Wrapper, Footer, Link, FooterContent } from './elements';
import { Settings } from '../Settings';
import { DropArea } from '../DropArea';
import { Files } from '../Files';
import Logo from '../Logo';
import { Classes, Button, Card, Icon } from '@blueprintjs/core';
import { useSelector } from '../../select';

export const App: React.FC = React.memo(() => {
  const hasFiles = useSelector((s) => s.files.length > 0);
  const running = useSelector((s) => s.running);
  const processFiles = useSelector((s) => s.processAndDowloadZip);

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
              loading={running}
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
          <Link href="https://dldc.dev/twitter">@EtienneTech</Link>
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
});
