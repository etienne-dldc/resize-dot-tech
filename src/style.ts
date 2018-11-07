import { injectGlobal } from 'emotion';
import { Colors } from '@blueprintjs/core';

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
