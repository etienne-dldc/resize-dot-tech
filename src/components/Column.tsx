import styled from 'react-emotion';

const Column = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'stretch',
  '& > *': {
    marginBottom: 20,
    '&:last-child': {
      marginBottom: 0,
    },
  },
});

export default Column;
