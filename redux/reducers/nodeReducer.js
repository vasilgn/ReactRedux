export default function reducer(state = {
  nodes: {
    'Main': true,
    'Login': false,
    'Register': false
  }
}, action) {
  switch (action.type) {
    case 'SHOW_NODE': {
      let payloadKey = Object.keys(action.payload)[0];
      let nodeKeys = state.nodes;
      let newState = {};
      Object.keys(nodeKeys).map((key,i) => {
        if (key !== payloadKey) {
          Object.assign(newState,{ [key]: !action.payload[payloadKey]})
        } else {
          Object.assign(newState,{ [key]: action.payload[payloadKey]})
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
