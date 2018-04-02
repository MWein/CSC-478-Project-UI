import { constants as appConstants } from '../actions/appActions'
import { combineReducers } from 'redux'
import { constants as loginConstants } from '../actions/loginActions'
import { EditorFormatListNumbered } from 'material-ui';


const username = (state = '', action = {}) => {
  switch (action.type) {
    case loginConstants.SET_USERNAME: return action.payload
    case appConstants.PURGE: return ''
    default: return state
  }
}

const usernameError = (state = '', action = {}) => {
  switch (action.type) {
    case loginConstants.SET_USERNAME_ERROR: return action.payload
    case loginConstants.RESET_FP: return ''
    case appConstants.PURGE: return ''
    default: return state
  }
}

const loginError = (state = false, action = {}) => {
  switch (action.type) {
    case loginConstants.SET_LOGIN_ERROR: return action.payload
    case loginConstants.RESET_FP: return false
    case appConstants.PURGE: return false
    default: return state
  }
}

const answerError = (state = false, action = {}) => {
  switch (action.type) {
    case loginConstants.SET_ANSWER_ERROR: return action.payload
    case loginConstants.RESET_FP: return false
    case appConstants.PURGE: return false
    default: return state
  }
}

const password = (state = '', action = {}) => {
  switch (action.type) {
    case loginConstants.SET_PASSWORD: return action.payload
    case appConstants.PURGE: return ''
    default: return state
  }
}

const forgotPassword = (state = false, action = {}) => {
  switch (action.type) {
    case loginConstants.SET_FORGOT_PASSWORD: return action.payload
    case appConstants.PURGE: return false
    default: return state
  }
}

const forgotPasswordStep = (state = 0, action = {}) => {
  switch (action.type) {
    case loginConstants.NEXT_FP_STEP: return state + 1
    case loginConstants.RESET_FP: return 0
    case appConstants.PURGE: return 0
    default: return state
  }
}

const securityQuestion = (state = '', action = {}) => {
  switch (action.type) {
    case loginConstants.SET_SECURITY_QUESTION: return action.payload
    case loginConstants.RESET_FP: return ''
    case appConstants.PURGE: return ''
    default: return state
  }
}

const securityAnswer = (state = '', action = {}) => {
  switch (action.type) {
    case loginConstants.SET_SECURITY_ANSWER: return action.payload
    case loginConstants.RESET_FP: return ''
    case appConstants.PURGE: return ''
    default: return state
  }
}


const reducer = combineReducers({
  username,
  password,
  usernameError,
  loginError,
  answerError,
  forgotPassword,
  forgotPasswordStep,
  securityQuestion,
  securityAnswer,
})

export default reducer
