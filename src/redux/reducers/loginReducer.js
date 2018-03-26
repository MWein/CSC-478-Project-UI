import { combineReducers } from 'redux'
import { constants as loginConstants } from '../actions/loginActions'


const username = (state = '', action = {}) => {
  switch (action.type) {
    case loginConstants.SET_USERNAME: return action.payload
    default: return state
  }
}

const password = (state = '', action = {}) => {
  switch (action.type) {
    case loginConstants.SET_PASSWORD: return action.payload
    default: return state
  }
}

const forgotPassword = (state = false, action = {}) => {
  switch (action.type) {
    case loginConstants.SET_FORGOT_PASSWORD: return action.payload
    default: return state
  }
}

const forgotPasswordStep = (state = 0, action = {}) => {
  switch (action.type) {
    case loginConstants.NEXT_FP_STEP: return state + 1
    case loginConstants.RESET_FP: return 0
    default: return state
  }
}


const reducer = combineReducers({
  username,
  password,
  forgotPassword,
  forgotPasswordStep,
})

export default reducer
