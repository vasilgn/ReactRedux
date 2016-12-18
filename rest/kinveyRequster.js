import axios from 'axios';
const kinveyAppID = 'kid_HkY3EF9mx';
const kinveyAppSecret = '37d31ffa207b41ef8160f574ef32c656';
const kinveyServiceBaseUrl = 'https://baas.kinvey.com/';
const appUrl = kinveyServiceBaseUrl + "user/" + kinveyAppID;
const authBase64 = btoa(kinveyAppID + ':' + kinveyAppSecret);

export const Requester = (function () {
  
  function deleteMessage(msgId, user) {

    return axios({
      method: 'DELETE',
      url: kinveyServiceBaseUrl + 'appdata/' + kinveyAppID + '/messages/' + msgId,
      headers: {"Authorization": "Kinvey " + user._kmd.authtoken},
    })
  }

  function newMessage(data, token) {

    return axios({
      method: 'POST',
      url: kinveyServiceBaseUrl + 'appdata/' + kinveyAppID + '/messages',
      headers: {"Authorization": "Kinvey " + token},
      data:data
    })
  }
  function listMessagesBySender(user) {

    return axios({
      method: 'GET',
      url: kinveyServiceBaseUrl + 'appdata/' + kinveyAppID + '/messages?query=' + JSON.stringify({sender_username: user.username}),
      headers: {"Authorization": "Kinvey " + user._kmd.authtoken}
    })
  }
  function listAllMessagesByRecipient(user) {

    return axios({
      method: 'GET',
      url: kinveyServiceBaseUrl + 'appdata/' + kinveyAppID + '/messages?query=' + JSON.stringify({recipient_username: user.username}),
      headers: {"Authorization": "Kinvey " + user._kmd.authtoken}
    })
  }

  function listAllUsers(token) {
    console.log(token)
    return axios({
      method: 'GET',
      url: appUrl,
      headers: {"Authorization": "Kinvey " + token}
    })
  }
  function login(data) {
    let appUrl = kinveyServiceBaseUrl + "user/" + kinveyAppID + '/login';
    return axios({
      method: "POST",
      url: appUrl,
      headers: {"Authorization": "Basic " + authBase64},
      data: data,
    })
  }
  function register(data) {
    let appUrl = kinveyServiceBaseUrl + "user/" + kinveyAppID + '/';
    
    return axios({
      method: "POST",
      url: appUrl,
      data: data,
      headers: {"Authorization": "Basic " + authBase64},
      
    })
    
    
  }
  function logout(user) {
    return axios({
      method: "POST",
      url: appUrl + '/_logout',
      headers: {"Authorization": "Kinvey " + user._kmd.authtoken},
    });
  }
  return {
    login,
    register,
    logout,
    listAllUsers,
    listAllMessagesByRecipient,
    listMessagesBySender,
    deleteMessage,
    newMessage
  }
})()


export const Helpers = (function () {
  
  function formatDate(dateISO8601) {
    let date = new Date(dateISO8601);
    if (Number.isNaN(date.getDate()))
      return '';
    return date.getDate() + '.' + padZeros(date.getMonth() + 1) +
      "." + date.getFullYear() + ' ' + date.getHours() + ':' +
      padZeros(date.getMinutes()) + ':' + padZeros(date.getSeconds());
    debugger
    function padZeros(num) {
      return ('0' + num).slice(-2);
    }
  }
  
  function formatSender(name, username) {
    if (!name)
      return username;
    else
      return username + ' (' + name + ')';
  }
  return {
    formatDate,
    formatSender
  }
})()
