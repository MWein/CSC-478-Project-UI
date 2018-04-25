import { constants as appConstants } from '../actions/appActions'
import { combineReducers } from 'redux'
import { constants as reportConstants } from '../actions/reportsActions'


const resultLimit = (state = 10, action = {}) => {
  switch (action.type) {
    case reportConstants.SET_RESULT_LIMIT: return action.payload
    case appConstants.PURGE: return 10
    default: return state
  }
}

const bestCustomers = (state = [], action = {}) => {
  switch (action.type) {
    case reportConstants.SET_BEST_CUSTOMERS: return action.payload
    case appConstants.PURGE: return []
    default: return state
  }
}

const bestMovies = (state = [], action = {}) => {
  switch (action.type) {
    case reportConstants.SET_BEST_MOVIES: return action.payload
    case appConstants.PURGE: return []
    default: return state
  }
}

const reducer = combineReducers({
  resultLimit,
  bestCustomers,
  bestMovies,
})

export default reducer
