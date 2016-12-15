
//sequence matters
const reducer = (state = {loggedIn: false}, action) => {
  switch (action.type) {
    case 'FETCH_USER_STATUS':
      return {
        loggedIn: action.loggedIn,
      }
    default:
      return state
  }
};

export default reducer