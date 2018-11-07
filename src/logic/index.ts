import { TConnect, createConnect } from 'overmind-react';
import { Overmind, TApp } from 'overmind';
import * as effects from './effects';
import * as actions from './actions';
import state from './state';
import { createUseOvermind } from './createUseOvermind';

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
  interface IApp extends TApp<typeof config> {}
}

const app = new Overmind(config);

export type ConnectProps = TConnect<typeof app>;

export const connect = createConnect(app);
export const useOvermind = createUseOvermind(app);

export default app;
