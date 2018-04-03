import { constants as appConstants } from '../actions/appActions'
import { combineReducers } from 'redux'
import { constants as editEmployeeConstants } from '../actions/editEmployeeActions'


const open = (state = false, action = {}) => {
  switch (action.type) {
    case editEmployeeConstants.SET_OPEN: return action.payload
    case appConstants.PURGE: return ''
    default: return state
  }
}

const mode = (state = '', action = {}) => {
  switch (action.type) {
    case editEmployeeConstants.SET_MODE: return action.payload
    case appConstants.PURGE: return ''
    default: return state
  }
}

const username = (state = '', action = {}) => {
  switch (action.type) {
    case editEmployeeConstants.SET_USERNAME: return action.payload
    case appConstants.PURGE: return ''
    default: return state
  }
}

const type = (state = 'employee', action = {}) => {
  switch (action.type) {
    case editEmployeeConstants.SET_EMPLOYEE_TYPE: return action.payload
    case appConstants.PURGE: return ''
    default: return state
  }
}

const firstName = (state = '', action = {}) => {
  switch (action.type) {
    case editEmployeeConstants.SET_FIRST_NAME: return action.payload
    case appConstants.PURGE: return ''
    default: return state
  }
}


const lastName = (state = '', action = {}) => {
  switch (action.type) {
    case editEmployeeConstants.SET_LAST_NAME: return action.payload
    case appConstants.PURGE: return ''
    default: return state
  }
}


const phone = (state = '', action = {}) => {
  switch (action.type) {
    case editEmployeeConstants.SET_PHONE_NUMBER: return action.payload
    case appConstants.PURGE: return ''
    default: return state
  }
}


const address = (state = '', action = {}) => {
  switch (action.type) {
    case editEmployeeConstants.SET_ADDRESS: return action.payload
    case appConstants.PURGE: return ''
    default: return state
  }
}

const password = (state = '', action = {}) => {
  switch (action.type) {
    case editEmployeeConstants.SET_PASSWORD: return action.payload
    case appConstants.PURGE: return ''
    default: return state
  }
}

const confirmPassword = (state = '', action = {}) => {
  switch (action.type) {
    case editEmployeeConstants.SET_CONFIRM_PASSWORD: return action.payload
    case appConstants.PURGE: return ''
    default: return state
  }
}


const reducer = combineReducers({
  open,
  mode,
  username,
  type,
  firstName,
  lastName,
  phone,
  address,
  password,
  confirmPassword,
})

export default reducer
