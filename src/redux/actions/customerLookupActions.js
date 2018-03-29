import createActions from './helpers/createActions'

export const {
  constants,
  actions,
} = createActions('customerLookup', {
  openCustomerLookup: 'OPEN_CUSTOMER_LOOKUP',
  closeCustomerLookup: 'CLOSE_CUSTOMER_LOOKUP',
  setPhoneNumber: 'SET_PHONE_NUMBER',
  setLastName: 'SET_LAST_NAME',
  setCustomers: 'SET_CUSTOMERS',
  setSelectedCustomers: 'SET_SELECTED_CUSTOMER',
})
