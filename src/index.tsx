import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import './style';

import 'normalize.css';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';
import '@blueprintjs/core/lib/css/blueprint.css';

import App from './components/App';

ReactDOM.render(<App />, document.getElementById('root') as HTMLElement);

serviceWorker.register({
  onSuccess: () => {
    console.log('Ready to use offline !');
  },
  onUpdate: () => {
    console.log('Ready to update, close the tab and re-open it to update');
  },
});
