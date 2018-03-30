import { combineReducers } from 'redux'
import { constants as navBarConstants } from '../actions/navBarActions'


const menuOpen = (state = false, action = {}) => {
  switch (action.type) {
    case navBarConstants.SET_MENU_OPEN: return action.payload
    default: return state
  }
}

const reducer = combineReducers({
  menuOpen,
})

export default reducer
