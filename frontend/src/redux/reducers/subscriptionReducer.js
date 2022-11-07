const initialState = {}

const subscriptionReducer = (state=initialState, action) => {
  switch (action.type) {
    case 'CREATE_SUBSCRIPTION_START':
      return action.subscription
    case 'SUBSCRIPTION_CREATION_SUCCESS':
      return { ...state, ...action.subscription }
    default:
      return state
  }
}

export default subscriptionReducer