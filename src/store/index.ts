import React from 'react';
import { render, createElement, supportReactHooks } from 'democrat';
import { AppStore } from './AppStore';

export type AppState = ReturnType<typeof AppStore>;

supportReactHooks(React);

const store = render(createElement(AppStore));

(window as any).store = store;

export default store;
