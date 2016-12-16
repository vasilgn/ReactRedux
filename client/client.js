import React from 'react';
import { render } from 'react-dom';
import App from '../components/App.js';
import { Provider } from 'react-redux';
import store from '../redux/store';

//sequence matters
console.log(store)
render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('app'));