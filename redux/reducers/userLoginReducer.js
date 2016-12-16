export default function reducer(state = {
  fetching: false,
  fetched: false,
  user: {
    name: 'Guest',
  },
  error: null
}, action) {
  switch (action.type) {
    case 'LOGIN_USER': {
      return {...state, fetching: true}
    }
      break;
    case 'LOGIN_USER_ERROR': {
      return {...state, fetching: false, error: action.payload}
    }
      break;
    case 'RECEIVE_USER_DATA': {
      return {
        fetching: false,
        fetched: true,
        user: action.payload
      }
    }
      break;
    default: {
      return state
    }
    
  }
}
