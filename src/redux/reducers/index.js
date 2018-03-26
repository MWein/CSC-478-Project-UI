import app from './appReducer'
import { combineReducers } from 'redux'
import login from './loginReducer'

export default combineReducers({
  app,
  login,
})
