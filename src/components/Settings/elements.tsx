import { FormGroup } from '@blueprintjs/core';
import styled from 'react-emotion';

export const InlineFormGroup = styled(FormGroup)({
  '& > *': {
    minWidth: 100,
  },
});

export const PopoverContainer = styled('div')({
  padding: '2rem',
  width: '400px',
});
