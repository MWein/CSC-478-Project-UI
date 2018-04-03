import createActions from './helpers/createActions'

export const {
  constants,
  actions,
} = createActions('error', {
  openEmployeeEditor: 'OPEN_EMPLOYEE_EDITOR',
  closeEmployeeEditor: 'CLOSE_EMPLOYEE_EDITOR',
  setUsername: 'SET_USERNAME',
  setEmployeeType: 'SET_EMPLOYEE_TYPE',
  setFirstName: 'SET_FIRST_NAME',
  setLastName: 'SET_LAST_NAME',
  setPhoneNumber: 'SET_PHONE_NUMBER',
  setAddress: 'SET_ADDRESS',
  setPassword: 'SET_PASSWORD',
  setConfirmPassword: 'SET_CONFIRM_PASSWORD',
})
