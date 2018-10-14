import createConnect, { TConnect } from 'overmind-react';
import App from 'overmind';
import * as effects from './effects';
import * as actions from './actions';
import state from './state';

type Config = {
  state: typeof state;
  actions: typeof actions;
  effects: typeof effects;
};

const config: Config = {
  actions,
  state,
  effects,
};

declare module 'overmind' {
  interface IState extends TState<Config> {}
  interface IEffects extends TEffects<Config> {}
}

const app = new App(config, {
  name: 'bulk-image-tool',
  // devtools: false,
});

export type ConnectProps = TConnect<typeof app>;

export const connect = createConnect(app);

export default app;
