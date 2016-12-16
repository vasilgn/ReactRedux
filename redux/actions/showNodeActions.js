export function showNodeActions(payload) {
  return function (dispatch) {
    dispatch({
      type: 'SHOW_NODE',
      payload: {
        [payload.name] : payload.visible
      }
    })
  }
}