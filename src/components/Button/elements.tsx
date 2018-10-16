import styled from 'react-emotion';
import posed from 'react-pose';
import gradients from 'src/utils/gradients';

export type ButtonStyledProps = {
  big: boolean;
  danger: boolean;
};

export const ButtonStyled = styled('button')<ButtonStyledProps>(
  {
    borderRadius: 0,
    textTransform: 'uppercase',
    margin: 0,
    height: 'auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    border: 'none',
    color: 'white',
    lineHeight: '1.3',
    fontSize: '1.3rem',
    cursor: 'pointer',
    padding: '0.6rem 1.7rem',
    transitionDuration: '300ms',
  },
  ({ big }) => ({
    ...(big ? { padding: '2rem 3rem' } : {}),
  })
);

export const ButtonStyledAnim = posed(ButtonStyled)({
  init: {
    backgroundImage: (props: { danger: boolean }) => (props.danger ? gradients.danger : gradients.buttonBlue),
  },
  hover: {
    backgroundImage: (props: { danger: boolean }) =>
      props.danger ? gradients.darken.danger : gradients.darken.buttonBlue,
  },
});
