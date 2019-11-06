export const totalCart = (total) => dispatch => {
  dispatch({
    type: 'TOTAL_CART',
    cartTotal: total
  })
}
