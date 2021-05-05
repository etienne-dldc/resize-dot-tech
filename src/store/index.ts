import React from 'react';
import { createStore } from 'democrat';
import { AppStore } from './AppStore';

const store = createStore(AppStore.createElement(), { ReactInstance: React });

(window as any).store = store;

export default store;
