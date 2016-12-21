import {loginUser, logoutUser, registerUser} from './baseUserActions.js'
import {fetchMyMessages, fetchMySendMessages} from './messagesActions.js'
import {showNodeActions} from './showNodeActions.js'
import {fetchUsers, sendMessage, deleteMessage} from './userActions.js'

const actions = {
  loginUser,
  logoutUser,
  registerUser,
  fetchMyMessages,
  fetchUsers,
  fetchMySendMessages,
  sendMessage,
  deleteMessage,
  showNodeActions,
}
export default actions