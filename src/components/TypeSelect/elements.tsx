import styled from 'react-emotion';
import posed from 'react-pose';
import gradients from '../../utils/gradients';

export const Wrapper = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'stretch',
  padding: 10,
});

export const SelectItem = styled('div')({
  flex: 1,
  textAlign: 'center',
  padding: 10,
  cursor: 'pointer',
});

export const SelectItemAnim = posed(SelectItem)({
  init: {
    color: '#424242',
    backgroundImage: gradients.beige,
  },
  hover: {
    color: '#424242',
    backgroundImage: gradients.darken.beige,
  },
  selected: {
    color: '#FFFFFF',
    backgroundImage: gradients.pink,
  },
  hoverSelected: {
    color: '#FFFFFF',
    backgroundImage: gradients.darken.pink,
  },
});
