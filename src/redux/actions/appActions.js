import createActions from './helpers/createActions'

export const {
  constants,
  actions,
} = createActions('app', {
  incLoading: 'INC_LOADING',
  decLoading: 'DEC_LOADING',
  setToken: 'SET_TOKEN',
  setRole: 'SET_ROLE',
  setFirstName: 'SET_FIRST_NAME',
  setLastName: 'SET_LAST_NAME',
  setRequirePasswordReset: 'SET_REQUIRE_PASSWORD_RESET',
  setRequireSecurityQuestion: 'SET_REQUIRE_SECURITY_QUESTION',
})
