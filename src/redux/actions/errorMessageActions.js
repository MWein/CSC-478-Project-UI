import createActions from './helpers/createActions'

export const {
  constants,
  actions,
} = createActions('error', {
  displayError: 'DISPLAY_ERROR',
  dismissError: 'DISMISS_ERROR',
})
