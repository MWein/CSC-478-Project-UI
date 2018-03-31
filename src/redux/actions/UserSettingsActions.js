import createActions from './helpers/createActions'

export const {
  constants,
  actions,
} = createActions('settings', {
  setRecoveryMode: 'SET_RECOVERY_MODE',
  setOldPassword: 'SET_OLD_PASSWORD',
  setNewPassword: 'SET_NEW_PASSWORD',

  setSecurityQuestion: 'SET_SECURITY_QUESTION',
  setSecurityAnswer: 'SET_SECURITY_ANSWER',
})
