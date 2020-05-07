import { combineReducers } from 'redux'
import currentUser from './currentUserReducer'
import vices from './vicesReducer'

export default combineReducers({
  vices,
  currentUser
})
