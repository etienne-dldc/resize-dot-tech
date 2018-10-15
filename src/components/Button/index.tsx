import * as React from 'react';
import { ButtonStyledAnim } from './elements';
import HoverProvider from '../HoverProvider';

type OnClick<P> = (params: P, event: React.MouseEvent<HTMLButtonElement>) => void;

type Props<P> = ({} extends P
  ? {
      onClick?: OnClick<{}>;
    }
  : {
      params: P;
      onClick?: OnClick<P>;
    }) & {
  big?: boolean;
  danger?: boolean;
};

class Button<P = {}> extends React.PureComponent<Props<P>> {
  public render() {
    const { children, big = false, danger = false } = this.props;
    return (
      <HoverProvider>
        {hoverParams => (
          <ButtonStyledAnim
            pose={hoverParams.hover ? 'hover' : 'init'}
            {...{ big, danger }}
            type="button"
            onClick={this.props.onClick ? this.onClick : undefined}
            innerRef={hoverParams.ref as any}
          >
            {children}
          </ButtonStyledAnim>
        )}
      </HoverProvider>
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
