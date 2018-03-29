import { combineReducers } from 'redux'
import { constants as lookupConstants } from '../actions/customerLookupActions.js'


const phone = (state = '', action = {}) => {
  switch (action.type) {
    case lookupConstants.SET_PHONE_NUMBER: return action.payload
    default: return state
  }
}

const lName = (state = '', action = {}) => {
  switch (action.type) {
    case lookupConstants.SET_LAST_NAME: return action.payload
    default: return state
  }
}

const customers = (state = [], action = {}) => {
  switch (action.type) {
    case lookupConstants.SET_CUSTOMERS: return action.payload
    default: return state
  }
}

const selectedCustomer = (state = '', action = {}) => {
  switch (action.type) {
    case lookupConstants.SET_SELECTED_CUSTOMER: return action.payload
    default: return state
  }
}


const reducer = combineReducers({
  phone,
  lName,
  customers,
  selectedCustomer,
})

export default reducer
