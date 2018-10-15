import * as React from 'react';
import { ConnectProps, connect } from 'src/logic';

type Coords = [number | null, number | null];

type Params = {
  hover: boolean;
  enterCoords: Coords;
  ref: React.Ref<HTMLElement>;
};

type ExternalProps = {
  children: (params: Params) => React.ReactNode;
  debug?: boolean;
  onHover?: (event: MouseEvent, enterCoords: Coords) => void;
};

type Props = ConnectProps & ExternalProps;

type State = {
  hover: boolean;
  enterCoords: Coords;
};

class HoverProvider extends React.PureComponent<Props, State> {
  private elRef = React.createRef<HTMLElement>();
  private registered: boolean = false;

  constructor(props: Props) {
    super(props);
    this.state = {
      hover: false,
      enterCoords: [null, null],
    };
  }

  public componentDidMount() {
    this.register();
  }

  public componentWillUnmount() {
    if (this.elRef.current) {
      this.elRef.current.removeEventListener('mouseenter', this.onEnter);
      this.elRef.current.removeEventListener('mouseleave', this.onLeave);
    } else {
      console.warn('Did you forgot to pass HoverProvider ref ?');
    }
  }

  public render() {
    const { debug = false } = this.props;
    return this.props.children({
      hover: debug ? true : this.state.hover,
      ref: this.elRef,
      enterCoords: this.state.enterCoords,
    });
  }

  private register = () => {
    if (this.registered === false && this.elRef.current) {
      this.elRef.current.addEventListener('mouseenter', this.onEnter);
      this.elRef.current.addEventListener('mouseleave', this.onLeave);
    }
  };

  private onEnter = (e: MouseEvent) => {
    const coords: Coords = [e.offsetX, e.offsetY];
    this.setState({ hover: true, enterCoords: coords });
    if (this.props.onHover) {
      this.props.onHover(e, coords);
    }
  };

  private onLeave = (e: MouseEvent) => {
    this.setState({ hover: false, enterCoords: [e.offsetX, e.offsetY] });
  };
}

export default connect<Props>(HoverProvider);
