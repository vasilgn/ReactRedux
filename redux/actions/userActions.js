import {Requester} from '../../rest/kinveyRequster.js';

export function fetchUsers(token) {
  return dispatch => {
    dispatch({type: 'FETCH_USERS'})
    return Requester.listAllUsers(token)
      .then((res) => {
        console.log(res)
        dispatch({type: 'RECEIVE_USERS', payload: res.data})
      }).catch((err) => {
        console.log(err)
        dispatch({
          type: 'FETCH_USERS_ERROR',
          payload: err.data
        })
      })
  }
}
export function sendMessage(data,token, currentState) {
  console.log('here')
  return dispatch => {
    return Requester.newMessage(data,token)
      .then((res) => {
        console.log(currentState)
        dispatch({type: 'RECEIVE_MESSAGES', payload: [...currentState, res.data] });
      }).catch((error) => {
      console.log(error)
    })
  }
}
export function deleteMessage(msgId,user) {
  console.log('here')
  console.log('here')
  return dispatch => {
    return Requester.deleteMessage(msgId,user)
      .then((res) => {
      console.log('Success delete')
      console.log(res)
      }).catch((error) => {
        console.log(error)
      })
  }
}