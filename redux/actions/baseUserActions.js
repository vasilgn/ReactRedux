import {Requester} from '../../rest/kinveyRequster.js';

export function loginUser(data) {
  return dispatch => {
    Requester.login(data)
      .then((res) => {
        dispatch({type: 'RECEIVE_USER_DATA', payload: res.data});
      })
      .then(() => {
        dispatch({type: 'SHOW_NODE', payload: {'Main': true}});
      })
      .catch((error) => {
      dispatch({
        type: 'LOGIN_USER_ERROR',
        payload: error.data.description
      })
    })
  }
}
export function logoutUser(user) {
  return dispatch => {
    Requester.logout(user)
      .then((res) => {
        console.log(res)
        dispatch({type: 'RECEIVE_USER_DATA', payload: {name: 'Guest'}});
        dispatch({type: 'SHOW_NODE', payload: {'Main': true}});
      }).catch((error) => {
      console.log(error)
      dispatch({
        type: 'LOGIN_USER_ERROR',
        payload: error.response.data.description
      })
    })
  }
}
export function registerUser(data) {
  return dispatch => {
    Requester.register(data)
      .then((res) => {
        console.log(res)
        dispatch({type: 'RECEIVE_USER_DATA', payload: res.data});
        dispatch({type: 'SHOW_NODE', payload: {'Main': true}});
      }).catch((error) => {
      console.log(error)
      dispatch({
        type: 'LOGIN_USER_ERROR',
        payload: error.response.data.description
      })
    })
  }
}