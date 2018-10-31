import styled from 'react-emotion';
import posed from 'react-pose';

export const Fade = posed.div({
  enter: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
});
