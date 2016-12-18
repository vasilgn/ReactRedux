export default function reducer(state = {
  nodes: {
    'Login': {
      display: 'none'
    },
    'Register': {
      display: 'none'
    },
    'MyMessages':{
      display: 'none'
    },
    'SendMessage':{
      display: 'none'
    },
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
          Object.assign(newState,{ [key]: {
            display: 'none'
          }})
        }
      })
      
        return {
          ...state,
          nodes: newState
        }
    }
    default: {
      return state
    }
    
  }
}
