import * as React from 'react';
import posed, { PoseGroup } from 'react-pose';
import { connect, ConnectProps } from '../../logic';

export const Fade = posed.div({
  enter: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
});

type Props = ConnectProps & {
  condition: boolean;
};

const Appear: React.FunctionComponent<Props> = ({ children, condition }) => {
  return <PoseGroup>{condition ? [<Fade key="only">{children}</Fade>] : []}</PoseGroup>;
};

export default connect(Appear);
