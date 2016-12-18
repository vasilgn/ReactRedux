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
export function sendMessage(data,token) {
  console.log('here')
  return dispatch => {
    Requester.newMessage(data,token)
    //   .then((res) => {
    //     console.log(res)
    //     dispatch({type: 'RECEIVE_USER_DATA', payload: res.data});
    //     dispatch({type: 'SHOW_NODE', payload: {'Main': true}});
    //   }).catch((error) => {
    //   console.log(error)
    //   dispatch({
    //     type: 'LOGIN_USER_ERROR',
    //     payload: error.response.data.description
    //   })
    // })
  }
}
