import createActions from './helpers/createActions'

export const {
  constants,
  actions,
} = createActions('app', {
  incLoading: 'INC_LOADING',
  decLoading: 'DEC_LOADING',
  setToken: 'SET_TOKEN',
  setRole: 'SET_ROLE',
})
