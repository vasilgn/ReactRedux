const userReducer = (user = {}, action) => {
  switch (action.type) {
    case 'FETCH_USER_STATUS':
      return {
        loggedIn: action.loggedIn,
      }
    default:
      return user
  }
};
export default userReducer