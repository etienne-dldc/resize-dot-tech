import styled from 'react-emotion';
import posed from 'react-pose';

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
    backgroundImage: 'linear-gradient(315deg, #f1dfd1 0%, #f6f0ea 74%)',
  },
  hover: {
    color: '#424242',
    backgroundImage: 'linear-gradient(315deg, #f6f0ea 0%, #f1dfd1 74%)',
  },
  hoverSelected: {
    color: '#FFFFFF',
    backgroundImage: 'linear-gradient(315deg, #09203f 0%, #537895 74%)',
  },
  selected: {
    color: '#FFFFFF',
    backgroundImage: 'linear-gradient(315deg, #537895 0%, #09203f 74%)',
  },
});
