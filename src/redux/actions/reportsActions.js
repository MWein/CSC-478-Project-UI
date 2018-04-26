import createActions from './helpers/createActions'

export const {
  constants,
  actions,
} = createActions('reports', {
  setResultLimit: 'SET_RESULT_LIMIT',
  setBestCustomers: 'SET_BEST_CUSTOMERS',
  setBestMovies: 'SET_BEST_MOVIES',
})
