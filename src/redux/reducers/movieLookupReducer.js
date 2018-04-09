import { constants as appConstants } from '../actions/appActions'
import { combineReducers } from 'redux'
import { constants as movieConstants } from '../actions/movieLookupActions'


const callbackFunction = (state = null, action = {}) => {
  switch (action.type) {
    case movieConstants.OPEN_MOVIE_LOOKUP: return action.payload
    case appConstants.PURGE: return null
    default: return state
  }
}

const mode = (state = '', action = {}) => {
  switch (action.type) {
    case movieConstants.SET_MODE: return action.payload
    case appConstants.PURGE: return false
    default: return state
  }
}

const open = (state = false, action = {}) => {
  switch (action.type) {
    case movieConstants.OPEN_MOVIE_LOOKUP: return true
    case movieConstants.CLOSE_MOVIE_LOOKUP: return false
    case appConstants.PURGE: return false
    default: return state
  }
}

const upc = (state = '', action = {}) => {
  switch (action.type) {
    case movieConstants.SET_UPC: return action.payload
    case movieConstants.CLOSE_MOVIE_LOOKUP: return ''
    case appConstants.PURGE: return ''
    default: return state
  }
}

const copyID = (state = '', action = {}) => {
  switch (action.type) {
    case movieConstants.SET_COPY_ID: return action.payload
    case movieConstants.CLOSE_MOVIE_LOOKUP: return ''
    case appConstants.PURGE: return ''
    default: return state
  }
}

const selectedMovie = (state = {}, action = {}) => {
  switch (action.type) {
    case movieConstants.SET_SELECTED_MOVIE: return action.payload
    case movieConstants.CLOSE_MOVIE_LOOKUP: return {}
    case appConstants.PURGE: return {}
    default: return state
  }
}

const movieList = (state = [], action = {}) => {
  switch (action.type) {
    case movieConstants.SET_MOVIE_LIST: return action.payload
    case appConstants.PURGE: return []
    default: return state
  }
}

const newMovieCopy = (state = '', action = {}) => {
  switch (action.type) {
    case movieConstants.SET_NEW_MOVIE_COPY: return action.payload
    case movieConstants.CLOSE_MOVIE_LOOKUP: return ''
    case appConstants.PURGE: return ''
    default: return state
  }
}

const selectedCopy = (state = '', action = {}) => {
  switch (action.type) {
    case movieConstants.SET_SELECTED_COPY: return action.payload
    case movieConstants.CLOSE_MOVIE_LOOKUP: return ''
    case appConstants.PURGE: return ''
    default: return state
  }
}

const copiesList = (state = [], action = {}) => {
  switch (action.type) {
    case movieConstants.SET_COPIES_LIST: return action.payload
    case appConstants.PURGE: return []
    default: return state
  }
}


const reducer = combineReducers({
  callbackFunction,
  mode,
  open,
  upc,
  copyID,
  selectedMovie,
  movieList,
  newMovieCopy,
  selectedCopy,
  copiesList,
})

export default reducer
