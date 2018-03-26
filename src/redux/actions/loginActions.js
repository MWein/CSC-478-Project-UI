import createActions from './helpers/createActions'

export const {
  constants,
  actions,
} = createActions('login', {
  getSecurityQuestion: 'GET_SECURITY_QUESTION',
  login: 'LOGIN',

  setUsername: 'SET_USERNAME',
  setPassword: 'SET_PASSWORD',
  setUsernameError: 'SET_USERNAME_ERROR',
  setLoginError: 'SET_LOGIN_ERROR',
  setForgotPassword: 'SET_FORGOT_PASSWORD',
  setSecurityQuestion: 'SET_SECURITY_QUESTION',
  setSecurityAnswer: 'SET_SECURITY_ANSWER',
  nextFPStep: 'NEXT_FP_STEP',
  resetFP: 'RESET_FP',
})
