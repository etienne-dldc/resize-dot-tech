import { Overmind } from 'overmind';
import { useState, useLayoutEffect } from 'react';

type Listener = {
  update: (paths: Set<string>) => void;
};

export const createUseOvermind = <App extends Overmind<any>>(app: App) => () => {
  const [listener, setListener] = useState<Listener | null>(null);
  const trackId = app.trackState();
  useLayoutEffect(() => {
    const paths = app.clearTrackState(trackId);
    if (listener) {
      listener.update(paths);
    } else {
      setListener(app.addMutationListener(paths, () => setListener(listener)));
    }
  });

  return app;
};
