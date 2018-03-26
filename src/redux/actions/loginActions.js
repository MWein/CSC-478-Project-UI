import createActions from './helpers/createActions'

export const {
  constants,
  actions,
} = createActions('app', {
  setUsername: 'SET_USERNAME',
  setPassword: 'SET_PASSWORD',
})
