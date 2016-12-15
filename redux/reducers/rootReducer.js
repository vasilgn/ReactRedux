import { combineReducers } from 'redux';
import todoReducer from './todoReducer.js';
import userReducer from './userReducer.js';
//sequence matters
const rootReducer = combineReducers({
  user: userReducer,
  todos: todoReducer
})

export default rootReducer