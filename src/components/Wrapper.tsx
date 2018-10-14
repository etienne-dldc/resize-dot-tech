import styled from 'react-emotion';

const Wrapper = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  height: '100%',
  width: '100%',
  alignItems: 'flex-start',
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

export default Wrapper;
