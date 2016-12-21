import {combineReducers} from 'redux';

import users from './usersReducer.js';
import messages from './messagesReducer.js';
import user from './userLoginReducer.js';
import nodes from './nodeReducer.js';
import sendMessages from './sendetMessagesReducer.js';

export default combineReducers({
  nodes,
  user,
  users,
  messages,
  sendMessages
})
