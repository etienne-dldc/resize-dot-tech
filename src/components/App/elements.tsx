import styled from 'react-emotion';
import { Colors } from '@blueprintjs/core';

export const Wrapper = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  alignSelf: 'stretch',
  width: '100%',
});

export const Colums = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  flex: 1,
  alignItems: 'flex-start',
  alignSelf: 'stretch',
  justifyContent: 'center',
  padding: 20,
  '& > *': {
    flex: 1,
    maxWidth: 500,
    marginRight: 20,
    '&:last-child': {
      marginRight: 0,
    },
  },
  '@media (max-width: 800px)': {
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    '& > *': {
      maxWidth: 'initial',
      flex: 'initial',
      marginRight: 0,
      marginBottom: 20,
      '&:last-child': {
        marginBottom: 0,
      },
    },
  },
});

export const Column = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'stretch',
  flexShrink: 0,
  '& > *': {
    marginBottom: 20,
    '&:last-child': {
      marginBottom: 0,
    },
  },
});

export const Footer = styled('footer')({
  color: 'white',
  padding: '2rem',
});

export const Link = styled('a')({
  cursor: 'pointer',
  color: Colors.BLUE4,
  '&:active': {
    color: Colors.BLUE5,
  },
});
