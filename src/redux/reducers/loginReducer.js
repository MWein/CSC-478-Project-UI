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


const reducer = combineReducers({
  username,
  password,
})

export default reducer
