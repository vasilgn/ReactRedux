import Guid from 'guid';

let actions = {
  addTodo: (text) =>{
    return {
      type: 'ADD_TODO',
      text: text
    }
  },
  completeTodo: (id)=>{
    return {
      type: 'COMPLETE_TODO',
      id: id
    }
  },
  deleteTodo: (id)=>{
    return {
      type: 'DELETE_TODO',
      id: id
    }
  },
  createNewUserId: () => {
    return {
      type: 'CREATE_USER_ID',
      id: Guid.create().toString()
    }
  }
};
export default actions