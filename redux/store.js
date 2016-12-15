import { applyMiddleware, compose, createStore } from 'redux';
import rootReducer from './reducers/rootReducer.js';
import logger from 'redux-logger';

const finalCreateStore = compose(
  applyMiddleware(logger())
)(createStore);

//add middleware
const configureStore = (initialState = { user:{}, todos: [] }) => {
  return finalCreateStore(rootReducer, initialState)
}
export default configureStore