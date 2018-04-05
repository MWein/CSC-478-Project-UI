import app from './appReducer'
import { combineReducers } from 'redux'
import customerLookup from './customerLookupReducer'
import employeeEditor from './editEmployeeReducer'
import employees from './employeeReducer'
import error from './errorMessageReducer'
import login from './loginReducer'
import navBar from './navBarReducer'
import settings from './UserSettingsReducer'

export default combineReducers({
  app,
  navBar,
  login,
  customerLookup,
  error,
  settings,
  employees,
  employeeEditor,
})
