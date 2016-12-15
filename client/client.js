import React from 'react';
import { render } from 'react-dom';
import App from '../components/App';
import { Provider } from 'react-redux';
import configureStore from '../redux/store.js';

//sequence matters
const initialState = {
  user: {
    username: 'Guest',
    id: -1
  },
  todos: [{
    id: 0,
    completed: false,
    text: 'Initial todo'
  }],
  error: ''
};

const store = configureStore(initialState);

render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('app'));