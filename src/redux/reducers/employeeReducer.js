import { constants as appConstants } from '../actions/appActions'
import { combineReducers } from 'redux'
import { constants as loginConstants } from '../actions/employeeActions'


const employeeList = (state = [], action = {}) => {
  switch (action.type) {
    case loginConstants.SET_EMPLOYEE_LIST: return action.payload
    case appConstants.PURGE: return []
    default: return state
  }
}

const searchText = (state = '', action = {}) => {
  switch (action.type) {
    case loginConstants.SET_SEARCH_TEXT: return action.payload
    case appConstants.PURGE: return ''
    default: return state
  }
}

const showInactive = (state = false, action = {}) => {
  switch (action.type) {
    case loginConstants.SET_SHOW_INACTIVE: return action.payload
    case appConstants.PURGE: return false
    default: return state
  }
}


const reducer = combineReducers({
  employeeList,
  searchText,
  showInactive,
})

export default reducer
