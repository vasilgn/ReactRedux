import {applyMiddleware, compose, createStore} from 'redux';
import rootReducer from './reducers/rootReducer.js';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

const finalCreateStore = compose(
  //add middleware
  applyMiddleware(thunk, logger())
)(createStore);


const configureStore = (initialState = {user: {}, todos: [], error: '' }) => {
  return finalCreateStore(rootReducer, initialState)
}
export default configureStore