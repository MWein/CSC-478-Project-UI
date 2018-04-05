import createActions from './helpers/createActions'

export const {
  constants,
  actions,
} = createActions('employee', {
  retrieveEmployeeList: 'RETRIEVE_EMPLOYEE_LIST',

  setEmployeeList: 'SET_EMPLOYEE_LIST',
})
