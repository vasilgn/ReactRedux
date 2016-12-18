export function showNodeActions(payload) {
  return dispatch=> {
    dispatch({
      type: 'SHOW_NODE',
      payload: {
        [payload.name] : { display: payload.visible }
      }
    })
  }
}