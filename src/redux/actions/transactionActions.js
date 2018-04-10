import createActions from './helpers/createActions'

export const {
  constants,
  actions,
} = createActions('transaction', {
  setSelectedCustomer: 'SET_SELECTED_CUSTOMER',
  setMovieList: 'SET_MOVIE_LIST',
  clearTransaction: 'CLEAR_TRANSACTION',
})
