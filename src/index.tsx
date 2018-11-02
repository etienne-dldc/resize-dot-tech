import 'normalize.css';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';
import '@blueprintjs/core/lib/css/blueprint.css';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { injectGlobal } from 'emotion';
import { Colors } from '@blueprintjs/core';

import App from './components/App';

// tslint:disable-next-line:no-unused-expression
injectGlobal`
html,
body {
  height: 100%;
}

html {
  box-sizing: border-box;
  font-size: 62.5%;
}

*,
*:after,
*:before {
  box-sizing: inherit;
}

body {
  margin: 0;
  padding: 0;

  font-size: 1.6em;
  font-weight: 300;
  letter-spacing: .01em;
  line-height: 1.6;

  font-family: 'Roboto', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
  color: #424242;
  background-color: ${Colors.DARK_GRAY3};
}

/* root */
#root {
  width: 100%;
  min-height: 100%;
  display: flex;
  justify-content: center;
}
`;

ReactDOM.render(<App />, document.getElementById('root') as HTMLElement);
