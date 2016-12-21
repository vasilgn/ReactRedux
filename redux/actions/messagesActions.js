import {Requester} from '../../rest/kinveyRequster.js';

export function fetchMyMessages(user) {
  return dispatch => {
    dispatch({type: 'FETCH_MESSAGES'})
    return Requester.listAllMessagesByRecipient(user)
      .then((res) => {
        dispatch({type: 'RECEIVE_MESSAGES', payload: res.data})
      })
      .catch((error) => {
        dispatch({type: 'FETCH_MESSAGES_ERROR', payload: error});
      })
  }
  
}
export function fetchMySendMessages(user) {
  return dispatch => {
    dispatch({type: 'FETCH_SEND_MESSAGES'})
    return Requester.listMessagesBySender(user)
      .then((res) => {
        console.log()
        dispatch({type: 'RECEIVE_SEND_MESSAGES', payload: res.data})
      })
      .catch((error) => {
        dispatch({type: 'FETCH_SEND_MESSAGES_ERROR', payload: error});
      })
  }
}