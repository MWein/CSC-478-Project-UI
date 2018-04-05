import { constants as appConstants } from '../actions/appActions'
import { combineReducers } from 'redux'
import { constants as resetPasswordConstants } from '../actions/adminResetPasswordActions'


const open = (state = false, action = {}) => {
  switch (action.type) {
    case resetPasswordConstants.OPEN_RESET_PASSWORD: return true
    case resetPasswordConstants.CLOSE_RESET_PASSWORD: return false
    case appConstants.PURGE: return false
    default: return state
  }
}

const password = (state = '', action = {}) => {
  switch (action.type) {
    case resetPasswordConstants.SET_NEW_PASSWORD: return action.payload
    case appConstants.PURGE: return ''
    default: return state
  }
}

const confirmPassword = (state = '', action = {}) => {
  switch (action.type) {
    case resetPasswordConstants.SET_CONFIRM_PASSWORD: return action.payload
    case appConstants.PURGE: return ''
    default: return state
  }
}


const reducer = combineReducers({
  open,
  password,
  confirmPassword,
})

export default reducer
