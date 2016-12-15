import { combineReducers } from 'redux';
import todoReducer from './todoReducer.js';
import userReducer from './userReducer.js';
import errorReducer from './errorReducer.js';
//sequence matters
const rootReducer = combineReducers({
  user: userReducer,
  todos: todoReducer,
  error: errorReducer
})

export default rootReducer