import { constants as appConstants } from '../actions/appActions'
import { combineReducers } from 'redux'
import { constants as errorConstants } from '../actions/errorMessageActions'


const title = (state = '', action = {}) => {
  switch (action.type) {
    case errorConstants.DISPLAY_ERROR: return 'Error'
    case errorConstants.DISPLAY_MESSAGE: return 'Message'
    case appConstants.PURGE: return ''
    default: return state
  }
}

const error = (state = false, action = {}) => {
  switch (action.type) {
    case errorConstants.DISPLAY_ERROR: return true
    case errorConstants.DISPLAY_MESSAGE: return true
    case errorConstants.DISMISS_ERROR: return false
    case appConstants.PURGE: return false
    default: return state
  }
}

const message = (state = '', action = {}) => {
  switch (action.type) {
    case errorConstants.DISPLAY_ERROR: return action.payload
    case errorConstants.DISPLAY_MESSAGE: return action.payload
    case appConstants.PURGE: return ''
    default: return state
  }
}


const reducer = combineReducers({
  title,
  error,
  message,
})

export default reducer
