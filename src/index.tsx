import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorkerRegistration';
import store from './store';
import reportWebVitals from './reportWebVitals';
import { App } from './components/App';
import { Provider } from './select';
import { Colors } from '@blueprintjs/core';
import { Global, css } from '@emotion/react';

import './index.css';
import 'normalize.css';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';
import '@blueprintjs/core/lib/css/blueprint.css';

ReactDOM.render(
  <Provider store={store}>
    <Global
      styles={css`
        body {
          background-color: ${Colors.DARK_GRAY3};
        }
      `}
    />
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);

serviceWorker.register({
  onSuccess: () => {
    console.log('Ready to use offline !');
  },
  onUpdate: () => {
    console.log('Ready to update, close the tab and re-open it to update');
  },
});

reportWebVitals();
