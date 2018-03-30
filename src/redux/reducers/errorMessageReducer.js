import { combineReducers } from 'redux'
import { constants as errorConstants } from '../actions/errorMessageActions'


const error = (state = false, action = {}) => {
  switch (action.type) {
    case errorConstants.DISPLAY_ERROR: return true
    case errorConstants.DISMISS_ERROR: return false
    default: return state
  }
}

const message = (state = '', action = {}) => {
  switch (action.type) {
    case errorConstants.DISPLAY_ERROR: return action.payload
    case errorConstants.DISMISS_ERROR: return ''
    default: return state
  }
}


const reducer = combineReducers({
  error,
  message,
})

export default reducer
