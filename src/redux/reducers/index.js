import app from './appReducer'
import { combineReducers } from 'redux'
import customerLookup from './customerLookupReducer'
import error from './errorMessageReducer'
import login from './loginReducer'
import settings from './UserSettingsReducer'

export default combineReducers({
  app,
  login,
  customerLookup,
  error,
  settings,
})
