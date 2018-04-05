import createActions from './helpers/createActions'

export const {
  constants,
  actions,
} = createActions('resetPassword', {
  openResetPassword: 'OPEN_RESET_PASSWORD',
  closeResetPassword: 'CLOSE_RESET_PASSWORD',

  setNewPassword: 'SET_NEW_PASSWORD',
  setConfirmPassword: 'SET_CONFIRM_PASSWORD',

  resetPassword: 'RESET_PASSWORD',
})
