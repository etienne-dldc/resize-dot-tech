import 'normalize.css';

import 'rc-slider/assets/index.css';
import 'rc-input-number/assets/index.css';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { injectGlobal } from 'emotion';

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
  background-color: #ffcfdf;
  background-image: linear-gradient(315deg, #ffcfdf 0%, #b0f3f1 74%);
}

/* root */
#root {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
}
`;

ReactDOM.render(<App />, document.getElementById('root') as HTMLElement);
