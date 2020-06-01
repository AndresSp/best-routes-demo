import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import addressStore from './stores/addressStore';
// import 'mobx-react-lite/batchingForReactDom';

ReactDOM.render(
  <React.StrictMode>
    <Provider addressStore={new addressStore()}>
      <App/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
      

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
