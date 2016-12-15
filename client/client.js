import React from 'react';
import { render } from 'react-dom';
import App from '../components/App';
import { Provider } from 'react-redux';
import configureStore from '../redux/store.js';

let initialState = {
  todos: [{
    id: 0,
    complete: false,
    text: 'Initial todo'
  }]
};

let store = configureStore(initialState);

render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('app'));