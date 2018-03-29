import app from './appReducer'
import { combineReducers } from 'redux'
import customerLookup from './customerLookupReducer'
import login from './loginReducer'

export default combineReducers({
  app,
  login,
  customerLookup,
})
