import styled from 'react-emotion';
import gradients, { GradientName } from 'src/utils/gradients';

type ColorBoxProps = {
  gradient: GradientName;
};

const ColorBox = styled('div')<ColorBoxProps>(
  {
    display: 'flex',
  },
  ({ gradient }) => ({
    backgroundImage: gradients[gradient],
    color: gradient === 'light' ? '#424242' : 'white',
  })
);

export default ColorBox;
