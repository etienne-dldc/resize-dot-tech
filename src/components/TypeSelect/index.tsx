import React from 'react';
import { ButtonGroup, Button } from '@blueprintjs/core';
import { OutputMimeType } from '../../store/types';
import { useSelector } from '../../select';

const typeNames: { [K in OutputMimeType]: string } = {
  [OutputMimeType.jpeg]: 'JPEG',
  [OutputMimeType.png]: 'PNG',
  [OutputMimeType.webp]: 'WEBP'
};

export const TypeSelect = React.memo(() => {
  const setSettingType = useSelector(s => s.settings.setSettingType);
  const selectedType = useSelector(s => s.settings.type);
  const running = useSelector(s => s.running);

  return (
    <ButtonGroup>
      {[OutputMimeType.jpeg, OutputMimeType.png, OutputMimeType.webp].map(k => {
        const onClick = () => {
          setSettingType(k);
        };
        const selected = k === selectedType;
        return (
          <Button key={k} active={selected} onClick={onClick} disabled={running}>
            {typeNames[k]}
          </Button>
        );
      })}
    </ButtonGroup>
  );
});
