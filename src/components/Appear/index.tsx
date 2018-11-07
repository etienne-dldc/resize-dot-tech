import * as React from 'react';
import posed, { PoseGroup } from 'react-pose';
import { useOvermind, ConnectProps } from '../../logic';

export const Fade = posed.div({
  enter: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
});

type Props = {
  condition: boolean;
};

const Appear: React.SFC<Props> = ({ children, condition }) => {
  useOvermind();
  return <PoseGroup>{condition ? [<Fade key="only">{children}</Fade>] : []}</PoseGroup>;
};

export default Appear;
