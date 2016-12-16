export default function reducer(state = {
  fetching: false,
  fetched: false,
  users: [],
  error: null
}, action) {
  switch (action.type) {
    case 'FETCH_USERS': {
      return {...state, fetching: true}
    }
      break;
    case 'FETCH_USERS_ERROR': {
      return {...state, fetching: false, error: action.payload}
    }
      break;
    case 'RECEIVE_USERS': {
      return {
        fetching: false,
        fetched: true,
        users: [...action.payload]
      }
    }
      break;
    default: {
      return state
    }
      
  }
}
