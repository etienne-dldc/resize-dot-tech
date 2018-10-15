import styled from 'react-emotion';

export const Container = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'stretch',
  transitionDuration: '300ms',
  ':hover': {
    background: '#ececec',
  },
});

export const Name = styled('p')({
  flex: 1,
  margin: 0,
});
