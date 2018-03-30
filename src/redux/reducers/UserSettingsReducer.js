import { combineReducers } from 'redux'
import { constants as settingsConstants } from '../actions/UserSettingsActions'


const recoveryMode = (state = false, action = {}) => {
  switch (action.type) {
    case settingsConstants.SET_RECOVERY_MODE: return action.payload
    default: return state
  }
}

const oldPassword = (state = '', action = {}) => {
  switch (action.type) {
    case settingsConstants.SET_OLD_PASSWORD: return action.payload
    default: return state
  }
}

const newPassword = (state = '', action = {}) => {
  switch (action.type) {
    case settingsConstants.SET_NEW_PASSWORD: return action.payload
    default: return state
  }
}


const securityQuestion = (state = '', action = {}) => {
  switch (action.type) {
    case settingsConstants.SET_SECURITY_QUESTION: return action.payload
    default: return state
  }
}

const securityAnswer = (state = '', action = {}) => {
  switch (action.type) {
    case settingsConstants.SET_SECURITY_ANSWER: return action.payload
    default: return state
  }
}


const reducer = combineReducers({
  recoveryMode,
  oldPassword,
  newPassword,
  securityQuestion,
  securityAnswer,
})

export default reducer
