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


const reducer = combineReducers({
  employeeList,
})

export default reducer
