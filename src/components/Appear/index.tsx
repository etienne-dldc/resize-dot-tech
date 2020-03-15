import React from 'react';
import posed, { PoseGroup } from 'react-pose';

const Fade = posed.div({
  enter: {
    opacity: 1
  },
  exit: {
    opacity: 0
  }
});

type Props = {
  condition: boolean;
};

export const Appear: React.FunctionComponent<Props> = React.memo(({ children, condition }) => {
  return <PoseGroup>{condition ? [<Fade key="only">{children}</Fade>] : []}</PoseGroup>;
});
