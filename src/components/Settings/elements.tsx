import styled from 'react-emotion';
import posed from 'react-pose';

export const Content = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'stretch',
});

export const Padding = styled('div')({
  padding: 10,
});

export const Label = styled('h3')({
  textTransform: 'uppercase',
  fontWeight: 600,
  padding: '10px 10px 0 13px',
  margin: 0,
  lineHeight: 1,
  fontSize: '1.4rem',
});

export const Fade = posed.div({
  enter: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
});
