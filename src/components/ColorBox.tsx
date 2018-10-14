import styled from 'react-emotion';

const gradients = {
  pink: 'linear-gradient(315deg, #6b0f1a 0%, #b91372 74%)',
  blue: 'linear-gradient(315deg, #7f53ac 0%, #647dee 74%)',
  red: 'linear-gradient(315deg, #ee8c68 0%, #eb6b9d 74%)',
};

type ColorBoxProps = {
  gradient: keyof typeof gradients;
};

const ColorBox = styled('div')<ColorBoxProps>(
  {
    display: 'flex',
    color: 'white',
  },
  ({ gradient }) => ({
    backgroundImage: gradients[gradient],
  })
);

export default ColorBox;
