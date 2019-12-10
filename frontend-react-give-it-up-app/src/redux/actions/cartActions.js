export const addViceToCart = vice => dispatch => {
  dispatch({
    type: "ADD_VICE_TO_CART",
    vice: vice
  });
};

export const removeViceFromCart = vice => dispatch => {
  dispatch({
    type: "REMOVE_VICE_FROM_CART",
    vice: vice
  });
};

export const totalCart = total => dispatch => {
  dispatch({
    type: "TOTAL_CART",
    cartTotal: total
  });
};
