const initialState = []

const vicesReducer = (state=initialState, action) => {
  switch (action.type) {
    case 'GET_VICES_SUCCESS':
      return action.vices
    case 'CREATE_VICE_SUCCESS':
      return { ...state, vices: [...state.vices, action.vice]}

    default:
      return state
  }
}

export default vicesReducer
