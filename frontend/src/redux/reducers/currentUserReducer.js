const initialState = {
  first_name: "",
  last_name: "",
  email: "",
  subscriptions: [],
  vices: [],
  cart: [],
  stripe_customer_id: '',
  cartTotal: null,
  loggedIn: false,
  loading: false
};

const currentUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SIGNUP_REQUEST_START":
      return { ...state, loading: true };
      case "SIGNIN_SUCCESS":
        return { ...state, loggedIn: true, ...action.user };
    case "LOGIN_REQUEST_SUCCESS":
      return { ...state, loading: false };
    case "PROFILE_REQUEST_START":
      return { ...state, loading: true };
            case "PROFILE_SUCCESS":
        return { ...state, loggedIn: true, ...action.user };
    case "ADD_VICE_TO_CART":
      return { ...state, cart: [action.vice, ...state.cart] };
    case "REMOVE_VICE_FROM_CART":
      const cartArray = [...state.cart];
      const filteredArr = cartArray.filter(vice => vice.id !== action.vice.id);
      return { ...state, cart: filteredArr };
    case "TOTAL_CART":
      return { ...state, cartTotal: action.cartTotal };
    default:
      return state;
  }
};

export default currentUserReducer;
