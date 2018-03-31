import { constants as appConstants } from '../actions/appActions'
import { combineReducers } from 'redux'


const loading = (state = 0, action = {}) => {
  switch (action.type) {
    case appConstants.INC_LOADING: return state + 1
    case appConstants.DEC_LOADING: return state - 1
    default: return state
  }
}

const token = (state = '', action = {}) => {
  switch (action.type) {
    case appConstants.SET_TOKEN: return action.payload
    default: return state
  }
}

const role = (state = '', action = {}) => {
  switch (action.type) {
    case appConstants.SET_ROLE: return action.payload
    default: return state
  }
}


const reducer = combineReducers({
  loading,
  token,
  role,
})

export default reducer
