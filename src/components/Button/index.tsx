import * as React from 'react';
import styled from 'react-emotion';

type OnClick<P> = (params: P, event: React.MouseEvent<HTMLButtonElement>) => void;

type Props<P> = {} extends P
  ? {
      onClick?: OnClick<{}>;
    }
  : {
      params: P;
      onClick?: OnClick<P>;
    };

const ButtonStyled = styled('button')({
  borderRadius: 0,
  textTransform: 'uppercase',
});

class Button<P = {}> extends React.PureComponent<Props<P>> {
  public render() {
    const { children } = this.props;
    return (
      <ButtonStyled type="button" onClick={this.props.onClick ? this.onClick : undefined}>
        {children}
      </ButtonStyled>
    );
  }

  private onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (this.props.onClick) {
      const params: P = (this.props as any).params || {};
      (this.props.onClick as OnClick<P>)(params, event);
    }
  };
}

export default Button;