import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import HooksApp from './HooksApp';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<HooksApp />, document.getElementById('hooks-container'));

serviceWorker.unregister();
