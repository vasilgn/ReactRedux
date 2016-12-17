import {Requester} from '../../rest/kinveyRequster.js';

export function fetchMessages(user) {
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