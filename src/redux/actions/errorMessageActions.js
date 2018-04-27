import createActions from './helpers/createActions'

export const {
  constants,
  actions,
} = createActions('error', {
  displayMessage: 'DISPLAY_MESSAGE',
  displayError: 'DISPLAY_ERROR',
  dismissError: 'DISMISS_ERROR',
})
