import createActions from './helpers/createActions'

export const {
  constants,
  actions,
} = createActions('transaction', {
  setSelectedCustomer: 'SET_SELECTED_CUSTOMER',


  clearTransaction: 'CLEAR_TRANSACTION',
})
