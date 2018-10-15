import styled from 'react-emotion';
import posed from 'react-pose';

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
    backgroundImage: (props: { danger: boolean }) =>
      props.danger
        ? 'linear-gradient(315deg, #eb4511 0%, #b02e0c 74%)'
        : 'linear-gradient(315deg, #045de9 0%, #09c6f9 74%)',
  },
  hover: {
    backgroundImage: (props: { danger: boolean }) =>
      props.danger
        ? 'linear-gradient(315deg, #b02e0c 0%, #eb4511 74%)'
        : 'linear-gradient(315deg, #09c6f9 0%, #045de9 74%)',
  },
});
