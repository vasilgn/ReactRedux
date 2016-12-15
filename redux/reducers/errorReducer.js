
const errorReducer = (error = '', action) =>{
  switch (action.type) {
    case 'THROW_ERROR':
      return action.error
    default:
      return error
  }
};
export default errorReducer