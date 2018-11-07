import * as React from 'react';
import { useOvermind } from '../../logic';
import { OutputMimeType } from '../../logic/state';
import { ButtonGroup, Button } from '@blueprintjs/core';

type Props = {};

const typeNames: { [K in OutputMimeType]: string } = {
  [OutputMimeType.jpeg]: 'JPEG',
  [OutputMimeType.png]: 'PNG',
  [OutputMimeType.webp]: 'WEBP',
};

const TypeSelect: React.SFC<Props> = ({}) => {
  const app = useOvermind();
  const onTypeSelected = React.useMemo(
    () => (type: OutputMimeType) => {
      app.actions.setSettingType(type);
    },
    []
  );
  return (
    <ButtonGroup>
      {[OutputMimeType.jpeg, OutputMimeType.png, OutputMimeType.webp].map(k => {
        const onClick = () => {
          onTypeSelected(k);
        };
        const selected = k === app.state.settings.type;
        return (
          <Button key={k} active={selected} onClick={onClick} disabled={app.state.running}>
            {typeNames[k]}
          </Button>
        );
      })}
    </ButtonGroup>
  );
};

export default TypeSelect;
