export default function reducer(state = {
  fetching: false,
  fetched: false,
  messages: [],
  error: null,
}, action) {
  switch (action.type) {
    case 'FETCH_MESSAGES': {
      return {...state, fetching: true}
    }
      break;
    case 'FETCH_MESSAGES_ERROR': {
      return {...state, fetching: false, error: action.payload }
    }
      break;
    case 'RECEIVE_MESSAGES': {
      return {
        fetching: false,
        fetched: true,
        messages: action.payload
      }
      break;
    }
    default: {
      return state
    }
    
  }
};

