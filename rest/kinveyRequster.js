import axios from 'axios';
const kinveyAppID = 'kid_HkY3EF9mx';
const kinveyAppSecret = '37d31ffa207b41ef8160f574ef32c656';
const kinveyServiceBaseUrl = 'https://baas.kinvey.com/';
const appUrl = kinveyServiceBaseUrl + "user/" + kinveyAppID;
const authBase64 = btoa(kinveyAppID + ':' + kinveyAppSecret);
const authUser = btoa('nakov:123')

let Requester = (function () {
  
  function deleteMessage(msgId) {

    return axios({
      method: 'DELETE',
      url: kinveyServiceBaseUrl + 'appdata/' + kinveyAppID + '/messages/' + msgId,
      headers: {"Authorization": "Kinvey " + sessionStorage.getItem('authToken')},
    })
  }

  function newMessage(data) {

    return axios({
      method: 'POST',
      url: kinveyServiceBaseUrl + 'appdata/' + kinveyAppID + '/messages',
      headers: {"Authorization": "Kinvey " + sessionStorage.getItem('authToken')},
      data:data
    })
  }
  function listMessagesBySender() {

    return axios({
      method: 'GET',
      url: kinveyServiceBaseUrl + 'appdata/' + kinveyAppID + '/messages?query=' + JSON.stringify({sender_username: sessionStorage.getItem('username')}),
      headers: {"Authorization": "Kinvey " + sessionStorage.getItem('authToken')}
    })
  }
  function listAllMessagesByRecipient() {

    return axios({
      method: 'GET',
      url: kinveyServiceBaseUrl + 'appdata/' + kinveyAppID + '/messages?query=' + JSON.stringify({recipient_username: sessionStorage.getItem('username')}),
      headers: {"Authorization": "Kinvey " + sessionStorage.getItem('authToken')}
    })
  }

  function listAllUsers() {
    return axios({
      method: 'GET',
      url: appUrl,
      headers: {"Authorization": "Kinvey " + sessionStorage.getItem('authToken')}
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
    listAllUsers
  }
})()
export default Requester