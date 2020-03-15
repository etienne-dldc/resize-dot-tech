import styled from '../theme';
import { Colors } from '@blueprintjs/core';

export const Container = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  height: 100,
  alignItems: 'stretch',
  justifyContent: 'center',
  fontSize: '1.7rem',
  lineHeight: 1.7,
  fontWeight: 300,
  padding: 0,
  '& > div': {
    cursor: 'pointer',
    borderColor: Colors.WHITE,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    flex: 1,
    borderStyle: 'dashed',
    flexDirection: 'column'
  }
});

export const DropText = styled('p')({
  margin: 0,
  textAlign: 'center'
});
