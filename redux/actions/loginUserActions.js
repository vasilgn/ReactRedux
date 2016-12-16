import Requester from '../../rest/kinveyRequster.js';

export function loginUser(data) {
  return function (dispatch) {
    Requester.login(data)
      .then((response) => {
        console.log(response)
        dispatch({type: 'RECEIVE_USER_DATA', payload: response.data});
      })
      .then(() => {
        dispatch({type: 'SHOW_NODE', payload: {'Main': true}});
      })
      .catch((response) => {
      console.log(response)
      dispatch({
        type: 'LOGIN_USER_ERROR',
        payload: response.data
      })
    })
  }
}
export function logoutUser(user) {
  return function (dispatch) {
    Requester.logout(user)
      .then((response) => {
        console.log(response)
        dispatch({type: 'RECEIVE_USER_DATA', payload: {name: 'Guest'}});
        dispatch({type: 'SHOW_NODE', payload: {'Main': true}});
      }).catch((response) => {
      console.log(response)
      dispatch({
        type: 'LOGIN_USER_ERROR',
        payload: response.data
      })
    })
  }
}
export function registerUser(user) {
  return function (dispatch) {
    Requester.register(user)
      .then((response) => {
        console.log(response)
        dispatch({type: 'RECEIVE_USER_DATA', payload: response.data});
        dispatch({type: 'SHOW_NODE', payload: {'Main': true}});
      }).catch((error) => {
      console.log(error)
      dispatch({
        type: 'LOGIN_USER_ERROR',
        payload: error.data
      })
    })
  }
}