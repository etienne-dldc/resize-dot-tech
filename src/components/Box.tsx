import styled from 'react-emotion';

const Box = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'stretch',
  justifyContent: 'flex-start',
  overflow: 'hidden',
  background: 'white',
  boxShadow: '0 3px 6px rgba(0, 0, 0, 0.05)',
  transitionDuration: '300ms',
  ':hover': {
    boxShadow: '0 3px 6px rgba(0, 0, 0, 0.2)',
  },
});

export default Box;
