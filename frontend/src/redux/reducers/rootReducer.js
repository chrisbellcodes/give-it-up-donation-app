import { combineReducers } from 'redux'
import currentUser from './currentUserReducer'
import vices from './vicesReducer'
import subscription from './subscriptionReducer'

export default combineReducers({
  subscription,
  vices,
  currentUser
})
