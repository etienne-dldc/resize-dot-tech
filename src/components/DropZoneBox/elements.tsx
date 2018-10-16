import styled from 'react-emotion';
import ColorBox from '../ColorBox';

export const DropBox = styled(ColorBox)({
  flexDirection: 'column',
  height: 100,
  alignItems: 'stretch',
  justifyContent: 'center',
  fontSize: '2rem',
  fontWeight: 300,
  padding: 10,
  '& > div': {
    borderColor: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    flex: 1,
    borderStyle: 'dashed',
    flexDirection: 'column',
  },
});

export const DropText = styled('p')({
  margin: 0,
  textAlign: 'center',
});
