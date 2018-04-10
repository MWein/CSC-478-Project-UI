import { constants as appConstants } from '../actions/appActions'
import { combineReducers } from 'redux'
import { constants as transactionConstants } from '../actions/transactionActions'


const customer = (state = {}, action = {}) => {
  switch (action.type) {
    case transactionConstants.SET_SELECTED_CUSTOMER: return action.payload
    case transactionConstants.CLEAR_TRANSACTION: return {}
    case appConstants.PURGE: return {}
    default: return state
  }
}

const movieList = (state = [], action = {}) => {
  switch (action.type) {
    case transactionConstants.SET_MOVIE_LIST: return action.payload
    case transactionConstants.CLEAR_TRANSACTION: return []
    case appConstants.PURGE: return []
    default: return state
  }
}

const reducer = combineReducers({
  customer,
  movieList,
})

export default reducer
