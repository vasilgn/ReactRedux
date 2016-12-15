import {applyMiddleware, compose, createStore, combineReducers} from 'redux';
import reducer from './reducers/reducer.js';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

const initialState = {
  loggedIn: false
};
reducer(initialState, { type: 'FETCH_USER_STATUS' })
const middleware = applyMiddleware(thunk, logger())
// const finalCreateStore = compose(
//   //add middleware
//   applyMiddleware()
// )(createStore);
const store = createStore(reducer, middleware)

// const configureStore = (initialState = {loggedIn: false}) => {
//   return finalCreateStore(rootReducer, initialState)
// }
export default store