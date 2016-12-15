import {applyMiddleware, compose, createStore} from 'redux';
import rootReducer from './reducers/rootReducer.js';
import logger from 'redux-logger';

const finalCreateStore = compose(
  //add middleware
  applyMiddleware(logger())
)(createStore);


const configureStore = (initialState = {user: {}, todos: [], error: '' }) => {
  return finalCreateStore(rootReducer, initialState)
}
export default configureStore