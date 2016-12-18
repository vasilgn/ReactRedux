import {loginUser, logoutUser, registerUser} from './baseUserActions.js'
import {fetchMessages} from './messagesActions.js'
import {showNodeActions} from './showNodeActions.js'
import {fetchUsers,sendMessage} from './userActions.js'

const actions = {
  loginUser,
  logoutUser,
  registerUser,
  fetchMessages,
  fetchUsers,
  sendMessage,
  showNodeActions,
}
export default actions