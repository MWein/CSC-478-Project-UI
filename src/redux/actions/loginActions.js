import createActions from './helpers/createActions'

export const {
  constants,
  actions,
} = createActions('app', {
  setUsername: 'SET_USERNAME',
  setPassword: 'SET_PASSWORD',
  setForgotPassword: 'SET_FORGOT_PASSWORD',
  setSecurityQuestion: 'SET_SECURITY_QUESTION',
  setSecurityAnswer: 'SET_SECURITY_ANSWER',
  nextFPStep: 'NEXT_FP_STEP',
  resetFP: 'RESET_FP',
})
