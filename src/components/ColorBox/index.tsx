import styled from 'react-emotion';
import gradients, { GradientName } from '../../utils/gradients';

type ColorBoxProps = {
  gradient: GradientName;
};

const ColorBoxBase = styled('div')<ColorBoxProps>(
  {
    display: 'flex',
  },
  ({ gradient }) => ({
    color: gradient === 'light' ? '#424242' : 'white',
  })
);

const ColorBox = styled(ColorBoxBase)<ColorBoxProps>(({ gradient }) => ({
  backgroundImage: gradients[gradient],
}));

type AnimatedColorBoxProps = {
  gradient: GradientName;
};

export const posedOptions = {
  init: {
    backgroundImage: ({ gradient }: AnimatedColorBoxProps) => gradients[gradient], // 'linear-gradient(315deg, #f1dfd1 0%, #f6f0ea 74%)',
  },
  hover: {
    backgroundImage: ({ gradient }: AnimatedColorBoxProps) => gradients.darken[gradient], // 'linear-gradient(315deg, #f6f0ea 0%, #f1dfd1 74%)',
  },
};

export default ColorBox;
