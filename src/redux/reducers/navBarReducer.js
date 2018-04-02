import { constants as appConstants } from '../actions/appActions'
import { combineReducers } from 'redux'
import { constants as navBarConstants } from '../actions/navBarActions'


const enabled = (state = false, action = {}) => {
  switch (action.type) {
    case navBarConstants.SET_NAV_ENABLED: return action.payload
    case appConstants.PURGE: return false
    default: return state
  }
}

const menuOpen = (state = false, action = {}) => {
  switch (action.type) {
    case navBarConstants.SET_MENU_OPEN: return action.payload
    case appConstants.PURGE: return false
    default: return state
  }
}

const reducer = combineReducers({
  enabled,
  menuOpen,
})

export default reducer
