export default function reducer(state = {
  fetching: false,
  fetched: false,
  sendMessages: [],
  error: null,
}, action) {
  switch (action.type) {
    case 'FETCH_SEND_MESSAGES': {
      return {...state, fetching: true}
    }
      break;
    case 'FETCH_SEND_MESSAGES_ERROR': {
      return {...state, fetching: false, error: action.payload }
    }
      break;
    case 'RECEIVE_SEND_MESSAGES': {
      return {
        fetching: false,
        fetched: true,
        sendMessages: action.payload
      }
      break;
    }
    default: {
      return state
    }
    
  }
};

