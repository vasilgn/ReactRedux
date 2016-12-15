import React from 'react';
import { render } from 'react-dom';
import App from '../components/App.jsx';
import { Provider } from 'react-redux';
import store from '../redux/store.js';

//sequence matters


render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('app'));