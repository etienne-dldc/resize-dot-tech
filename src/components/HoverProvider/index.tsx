import React from 'react';

type Coords = [number | null, number | null];

type Params = {
  hover: boolean;
  enterCoords: Coords;
  ref: React.Ref<HTMLElement | undefined>;
};

type ExternalProps = {
  children: (params: Params) => React.ReactElement | null;
  debug?: boolean;
  onHover?: (event: MouseEvent, enterCoords: Coords) => void;
};

type Props = ExternalProps;

export const HoverProvider = React.memo<Props>(({ children, debug = false, onHover }) => {
  const elRef = React.useRef<HTMLElement>();
  const onHoverRef = React.useRef(onHover);
  onHoverRef.current = onHover;

  const [hover, setHover] = React.useState(false);
  const [enterCoords, setEnterCoords] = React.useState<Coords>([null, null]);

  const onEnter = React.useCallback((e: MouseEvent) => {
    const coords: Coords = [e.offsetX, e.offsetY];
    setHover(true);
    setEnterCoords(coords);
    if (onHoverRef.current) {
      onHoverRef.current(e, coords);
    }
  }, []);

  const onLeave = React.useCallback((e: MouseEvent) => {
    setHover(false);
    setEnterCoords([e.offsetX, e.offsetY]);
  }, []);

  React.useEffect(() => {
    const el = elRef.current;
    if (el) {
      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);
      return () => {
        el.removeEventListener('mouseenter', onEnter);
        el.removeEventListener('mouseleave', onLeave);
      };
    }
  }, [onEnter, onLeave]);

  return children({
    hover: debug ? true : hover,
    ref: elRef,
    enterCoords: enterCoords
  });
});
