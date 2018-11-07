import * as React from 'react';
import { useOvermind } from '../../logic';

type Params = {
  hover: boolean;
  ref: React.Ref<HTMLElement>;
};

type ExternalProps = {
  children: (params: Params) => React.ReactElement<any> | null;
  onHover?: (event: MouseEvent) => void;
  debug?: boolean;
};

type Props = ExternalProps;

type State = {
  hover: boolean;
};

const HoverProvider: React.SFC<Props> = ({ children, onHover, debug = false }) => {
  const app = useOvermind();
  const [isHover, setHover] = React.useState(false);
  const elRef = React.useRef<HTMLElement>();
  const onEnter = React.useMemo(
    () => (e: MouseEvent) => {
      setHover(true);
      if (onHover) {
        onHover(e);
      }
    },
    [onHover]
  );
  const onLeave = React.useMemo(
    () => (e: MouseEvent) => {
      setHover(false);
    },
    []
  );
  React.useEffect(
    () => {
      if (elRef.current) {
        elRef.current.addEventListener('mouseenter', onEnter);
        elRef.current.addEventListener('mouseleave', onLeave);
        return () => {
          if (elRef.current) {
            elRef.current.removeEventListener('mouseenter', onEnter);
            elRef.current.removeEventListener('mouseleave', onLeave);
          }
        };
      }
    },
    [elRef.current, onEnter, onLeave]
  );

  return children({
    hover: debug ? true : isHover,
    ref: elRef,
  });
};

export default HoverProvider;
