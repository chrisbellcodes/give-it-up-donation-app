export const getVices = () => dispatch => {
  fetch(`/vices`)
    .then((res) => res.json())
    .then((vices) => {
      dispatch({
        type: "GET_VICES_SUCCESS",
        vices: vices,
      });
    });
};

export const createNewVice = viceData => dispatch => {
  fetch(`/vices`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(viceData),
  })
    .then((res) => res.json())
    .then((newVice) => {
      dispatch({
        type: "CREATE_VICE_SUCCESS",
        vice: newVice,
      });
    });
};
