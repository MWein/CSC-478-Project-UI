import createActions from './helpers/createActions'

export const {
  constants,
  actions,
} = createActions('app', {
  setUsername: 'SET_USERNAME',
  setPassword: 'SET_PASSWORD',
  setForgotPassword: 'SET_FORGOT_PASSWORD',
  nextFPStep: 'NEXT_FP_STEP',
  resetFP: 'RESET_FP',
})
