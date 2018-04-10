import createActions from './helpers/createActions'

export const {
  constants,
  actions,
} = createActions('movieLookup', {
  setMode: 'SET_MODE',
  openMovieLookup: 'OPEN_MOVIE_LOOKUP',
  closeMovieLookup: 'CLOSE_MOVIE_LOOKUP',

  setUPC: 'SET_UPC',
  setCopyID: 'SET_COPY_ID',
  setSelectedMovie: 'SET_SELECTED_MOVIE',
  setMoviesList: 'SET_MOVIE_LIST',

  setNewMovieCopy: 'SET_NEW_MOVIE_COPY',
  setSelectedCopy: 'SET_SELECTED_COPY',
  setCopiesList: 'SET_COPIES_LIST',

  // Sagas
  getMovie: 'GET_MOVIE',
  createCopy: 'CREATE_COPY',
})
