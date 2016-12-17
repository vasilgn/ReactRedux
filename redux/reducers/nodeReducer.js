export default function reducer(state = {
  nodes: {
    'Login': false,
    'Register': false,
    'MyMessages':false,
  }
}, action) {
  switch (action.type) {
    case 'SHOW_NODE': {
      let payloadKey = Object.keys(action.payload)[0];
      let nodeKeys = state.nodes;
      let newState = {};
      Object.keys(nodeKeys).map((key,i) => {
        if (key === payloadKey) {
          Object.assign(newState,{ [key]: action.payload})
        }
        if(key && (key != payloadKey)){
          Object.assign(newState,{ [key]: false})
        }
      })
        return {
          nodes: newState
        }
    }
    default: {
      return state
    }
    
  }
}
