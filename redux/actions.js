const actions = {
  checkLoggedIn: () => {
    return {
      type: 'FETCH_USER_STATUS',
      loggedIn: sessionStorage.getItem('authToken') !== null ? true : false
    }
  },
  
};
export default actions