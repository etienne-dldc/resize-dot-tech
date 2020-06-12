import React from 'react';
import { createElement, createStore } from 'democrat';
import { AppStore } from './AppStore';

export type AppState = ReturnType<typeof AppStore>;

const store = createStore(createElement(AppStore), { ReactInstance: React });

(window as any).store = store;

export default store;
