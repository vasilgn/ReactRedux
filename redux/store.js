import { applyMiddleware, compose, createStore } from 'redux';
import reducer from './reducer.js';
import logger from 'redux-logger';

const finalCreateStore = compose(
  applyMiddleware(logger())
)(createStore);

//add middleware
let configureStore = (initialState = { todos: [] }) => {
  return finalCreateStore(reducer, initialState)
}
export default configureStore