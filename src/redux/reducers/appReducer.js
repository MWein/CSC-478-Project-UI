import { constants as appConstants } from '../actions/appActions'
import { combineReducers } from 'redux'


const page = (state = '', action = {}) => {
  switch (action.type) {
    case appConstants.SET_PAGE: return action.payload

    case appConstants.OPEN_EMPLOYEE_PAGE: return 'employees'
    case appConstants.OPEN_SETTINGS_PAGE: return 'settings'
    case appConstants.OPEN_REPORTS_PAGE: return 'reports'
    case appConstants.OPEN_TRANSACTION_PAGE: return 'transaction'
    case appConstants.OPEN_RETURN_PAGE: return 'return'

    case appConstants.PURGE: return ''
    default: return state
  }
}

const loading = (state = 0, action = {}) => {
  switch (action.type) {
    case appConstants.INC_LOADING: return state + 1
    case appConstants.DEC_LOADING: return state - 1
    case appConstants.PURGE: return 0
    default: return state
  }
}

const token = (state = '', action = {}) => {
  switch (action.type) {
    case appConstants.SET_TOKEN: return action.payload
    case appConstants.PURGE: return ''
    default: return state
  }
}

const username = (state = '', action = {}) => {
  switch (action.type) {
    case appConstants.SET_USERNAME: return action.payload
    case appConstants.PURGE: return ''
    default: return state
  }
}

const role = (state = '', action = {}) => {
  switch (action.type) {
    case appConstants.SET_ROLE: return action.payload
    case appConstants.PURGE: return ''
    default: return state
  }
}

const firstName = (state = '', action = {}) => {
  switch (action.type) {
    case appConstants.SET_FIRST_NAME: return action.payload
    case appConstants.PURGE: return ''
    default: return state
  }
}

const lastName = (state = '', action = {}) => {
  switch (action.type) {
    case appConstants.SET_LAST_NAME: return action.payload
    case appConstants.PURGE: return ''
    default: return state
  }
}

const requireSecurityQuestion = (state = false, action = {}) => {
  switch (action.type) {
    case appConstants.SET_REQUIRE_SECURITY_QUESTION: return action.payload
    case appConstants.PURGE: return false
    default: return state
  }
}


const reducer = combineReducers({
  page,
  loading,
  token,
  username,
  role,
  firstName,
  lastName,
  requireSecurityQuestion,
})

export default reducer
