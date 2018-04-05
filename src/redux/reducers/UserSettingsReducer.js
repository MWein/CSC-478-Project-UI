import { constants as appConstants } from '../actions/appActions'
import { combineReducers } from 'redux'
import { constants as settingsConstants } from '../actions/UserSettingsActions'


const recoveryMode = (state = false, action = {}) => {
  switch (action.type) {
    case settingsConstants.SET_RECOVERY_MODE: return action.payload
    case appConstants.PURGE: return false
    default: return state
  }
}

const oldPassword = (state = '', action = {}) => {
  switch (action.type) {
    case settingsConstants.SET_OLD_PASSWORD: return action.payload
    case appConstants.PURGE: return ''
    default: return state
  }
}

const newPassword = (state = '', action = {}) => {
  switch (action.type) {
    case settingsConstants.SET_NEW_PASSWORD: return action.payload
    case appConstants.PURGE: return ''
    default: return state
  }
}


const securityQuestion = (state = '', action = {}) => {
  switch (action.type) {
    case settingsConstants.SET_SECURITY_QUESTION: return action.payload
    case appConstants.PURGE: return ''
    default: return state
  }
}

const securityAnswer = (state = '', action = {}) => {
  switch (action.type) {
    case settingsConstants.SET_SECURITY_ANSWER: return action.payload
    case appConstants.PURGE: return ''
    default: return state
  }
}

const passwordChangeSuccess = (state = false, action = {}) => {
  switch (action.type) {
    case settingsConstants.SET_PASSWORD_CHANGE_SUCCESS: return action.payload
    case appConstants.PURGE: return false
    default: return state
  }
}

const securityQuestionChangeSuccess = (state = false, action = {}) => {
  switch (action.type) {
    case settingsConstants.SET_SECURITY_QUESTION_CHANGE_SUCCESS: return action.payload
    case appConstants.PURGE: return false
    default: return state
  }
}


const reducer = combineReducers({
  recoveryMode,
  oldPassword,
  newPassword,
  securityQuestion,
  securityAnswer,
  passwordChangeSuccess,
  securityQuestionChangeSuccess,
})

export default reducer
