export const createSubscription = (currentUser) => dispatch => {
  // dispatch({type: 'CREATE_SUBSCRIPTION_START'})
  const priceIds = currentUser.cart.map(vice => {
    return  vice.stripe_price_id
  })
  fetch('/subscriptions', {
      method: 'post',
      headers: { 
        'Content-Type': 'application/json',
        Accept: "application/json",
      },
      body: JSON.stringify({
        stripe_customer_id: currentUser.stripe_customer_id,
        prices: priceIds,
      }),
    })
    .then(res => res.json())
    .then((subscriptionInfo) => {
      dispatch({ 
      type: "SUBSCRIPTION_CREATION_SUCCESS", 
      subscription: subscriptionInfo
    })
  }); 
  // add a catch here???
}