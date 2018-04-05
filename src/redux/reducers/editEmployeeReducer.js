import { constants as appConstants } from '../actions/appActions'
import { combineReducers } from 'redux'
import { constants as editEmployeeConstants } from '../actions/editEmployeeActions'


const open = (state = false, action = {}) => {
  switch (action.type) {
    case editEmployeeConstants.OPEN_EMPLOYEE_EDITOR: return true
    case editEmployeeConstants.CLOSE_EMPLOYEE_EDITOR: return false
    case appConstants.PURGE: return false
    default: return state
  }
}

const resetPasswordOpen = (state = false, action = {}) => {
  switch (action.type) {
    case editEmployeeConstants.OPEN_RESET_PASSWORD: return true
    case editEmployeeConstants.CLOSE_RESET_PASSWORD: return false
    case appConstants.PURGE: return false
    default: return state
  }
}

const mode = (state = '', action = {}) => {
  switch (action.type) {
    case editEmployeeConstants.OPEN_EMPLOYEE_EDITOR: return !action.payload ? 'add' : 'edit'
    case appConstants.PURGE: return ''
    default: return state
  }
}


const employeeActive = (state = false, action = {}) => {
  switch (action.type) {
    case editEmployeeConstants.OPEN_EMPLOYEE_EDITOR: return !action.payload ? false : action.payload.active
    case editEmployeeConstants.SET_EMPLOYEE_ACTIVE: return action.payload
    case appConstants.PURGE: return false
    default: return state
  }
}


const username = (state = '', action = {}) => {
  switch (action.type) {
    case editEmployeeConstants.OPEN_EMPLOYEE_EDITOR: return !action.payload ? '' : action.payload.id
    case editEmployeeConstants.SET_USERNAME: return action.payload
    case appConstants.PURGE: return ''
    default: return state
  }
}

const type = (state = 'employee', action = {}) => {
  switch (action.type) {
    case editEmployeeConstants.OPEN_EMPLOYEE_EDITOR: return !action.payload ? 'employee' : action.payload.role
    case editEmployeeConstants.SET_EMPLOYEE_TYPE: return action.payload
    case appConstants.PURGE: return 'employee'
    default: return state
  }
}

const firstName = (state = '', action = {}) => {
  switch (action.type) {
    case editEmployeeConstants.OPEN_EMPLOYEE_EDITOR: return !action.payload ? '' : action.payload.f_name
    case editEmployeeConstants.SET_FIRST_NAME: return action.payload
    case appConstants.PURGE: return ''
    default: return state
  }
}


const lastName = (state = '', action = {}) => {
  switch (action.type) {
    case editEmployeeConstants.OPEN_EMPLOYEE_EDITOR: return !action.payload ? '' : action.payload.l_name
    case editEmployeeConstants.SET_LAST_NAME: return action.payload
    case appConstants.PURGE: return ''
    default: return state
  }
}


const phone = (state = '', action = {}) => {
  switch (action.type) {
    case editEmployeeConstants.OPEN_EMPLOYEE_EDITOR: return !action.payload ? '' : action.payload.phone
    case editEmployeeConstants.SET_PHONE_NUMBER: return isNaN(action.payload) ? state : action.payload
    case appConstants.PURGE: return ''
    default: return state
  }
}


const address = (state = '', action = {}) => {
  switch (action.type) {
    case editEmployeeConstants.OPEN_EMPLOYEE_EDITOR: return !action.payload ? '' : action.payload.address
    case editEmployeeConstants.SET_ADDRESS: return action.payload
    case appConstants.PURGE: return ''
    default: return state
  }
}

const password = (state = '', action = {}) => {
  switch (action.type) {
    case editEmployeeConstants.SET_PASSWORD: return action.payload
    case editEmployeeConstants.OPEN_RESET_PASSWORD: return ''
    case appConstants.PURGE: return ''
    default: return state
  }
}

const confirmPassword = (state = '', action = {}) => {
  switch (action.type) {
    case editEmployeeConstants.SET_CONFIRM_PASSWORD: return action.payload
    case editEmployeeConstants.OPEN_RESET_PASSWORD: return ''
    case appConstants.PURGE: return ''
    default: return state
  }
}


const reducer = combineReducers({
  open,
  resetPasswordOpen,
  mode,
  employeeActive,
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
