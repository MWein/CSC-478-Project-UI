import { combineReducers } from 'redux'
import { constants as lookupConstants } from '../actions/customerLookupActions.js'


const open = (state = false, action = {}) => {
  switch (action.type) {
    case lookupConstants.OPEN_CUSTOMER_LOOKUP: return true
    case lookupConstants.CLOSE_CUSTOMER_LOOKUP: return false
    default: return state
  }
}

const fName = (state = '', action = {}) => {
  switch (action.type) {
    case lookupConstants.SET_FIRST_NAME: return action.payload
    case lookupConstants.CLOSE_CUSTOMER_LOOKUP: return ''
    default: return state
  }
}

const lName = (state = '', action = {}) => {
  switch (action.type) {
    case lookupConstants.SET_LAST_NAME: return action.payload
    case lookupConstants.CLOSE_CUSTOMER_LOOKUP: return ''
    default: return state
  }
}

const phone = (state = '', action = {}) => {
  switch (action.type) {
    case lookupConstants.SET_PHONE_NUMBER: return isNaN(action.payload) ? state : action.payload
    case lookupConstants.CLOSE_CUSTOMER_LOOKUP: return ''
    default: return state
  }
}

const email = (state = '', action = {}) => {
  switch (action.type) {
    case lookupConstants.SET_EMAIL: return action.payload
    case lookupConstants.CLOSE_CUSTOMER_LOOKUP: return ''
    default: return state
  }
}

const address = (state = '', action = {}) => {
  switch (action.type) {
    case lookupConstants.SET_ADDRESS: return action.payload
    case lookupConstants.CLOSE_CUSTOMER_LOOKUP: return ''
    default: return state
  }
}

const customers = (state = [], action = {}) => {
  switch (action.type) {
    case lookupConstants.SET_CUSTOMERS: return action.payload
    default: return state
  }
}

const filteredCustomers = (state = [], action = {}) => {
  switch (action.type) {
    case lookupConstants.SET_FILTERED_CUSTOMERS: return action.payload
    case lookupConstants.CLOSE_CUSTOMER_LOOKUP: return []
    default: return state
  }
}

const notFound = (state = false, action = {}) => {
  switch (action.type) {
    case lookupConstants.SET_NOT_FOUND: return action.payload
    case lookupConstants.CLOSE_CUSTOMER_LOOKUP: return false
    default: return state
  }
}

const selectedCustomer = (state = {}, action = {}) => {
  switch (action.type) {
    case lookupConstants.SET_SELECTED_CUSTOMER: return action.payload
    case lookupConstants.CLOSE_CUSTOMER_LOOKUP: return {}
    default: return state
  }
}

const mode = (state = '', action = {}) => {
  switch (action.type) {
    case lookupConstants.SET_MODE: return action.payload
    case lookupConstants.OPEN_CUSTOMER_LOOKUP: return ''
    default: return state
  }
}


const reducer = combineReducers({
  open,
  fName,
  lName,
  phone,
  email,
  address,
  customers,
  filteredCustomers,
  notFound,
  selectedCustomer,
  mode,
})

export default reducer
