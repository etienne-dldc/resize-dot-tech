import styled from 'react-emotion';
import posed from 'react-pose';
import { Colors } from '@blueprintjs/core';

type ContainerProps = { isEven: boolean };

export const Container = styled('div')<ContainerProps>(
  {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    borderRadius: 5,
    margin: '2px 0',
    transitionDuration: '300ms',
    ':hover': {
      background: Colors.DARK_GRAY5,
    },
  },
  (props: ContainerProps) =>
    props.isEven
      ? {
          background: Colors.DARK_GRAY5,
        }
      : {}
);

const ButtonWrapperStyled = styled('div')({
  position: 'absolute',
  right: 0,
  top: 0,
  bottom: 0,
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  padding: 5,
});

export const ButtonWrapper = posed(ButtonWrapperStyled)({
  show: {
    opacity: 1,
    x: 0,
  },
  hide: {
    opacity: 0,
    x: 50,
  },
});

export const Header = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  minHeight: 40,
  position: 'relative',
});

export const Details = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
});

export const Name = styled('p')({
  flex: 1,
  margin: 0,
  padding: '0.8rem 1rem',
});
