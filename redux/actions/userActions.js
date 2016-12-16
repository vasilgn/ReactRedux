import Requester from '../../rest/kinveyRequster.js';

export function fetchUser() {
  return function (dispatch) {
    Requester.listAllUsers()
      .then((response)=>{
        dispatch({type: 'FETCH_USERS', payload: response.data})
      }).catch((response)=>{
      dispatch({
        type: 'FETCH_USERS_ERROR',
        payload: response.data
      })
    })
  }
}
