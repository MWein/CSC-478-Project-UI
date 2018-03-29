import createActions from './helpers/createActions'

export const {
  constants,
  actions,
} = createActions('customerLookup', {
  getAllCustomers: 'GET_ALL_CUSTOMERS',
  openCustomerLookup: 'OPEN_CUSTOMER_LOOKUP',
  closeCustomerLookup: 'CLOSE_CUSTOMER_LOOKUP',
  setPhoneNumber: 'SET_PHONE_NUMBER',
  setLastName: 'SET_LAST_NAME',
  setCustomers: 'SET_CUSTOMERS',
  setFilteredCustomers: 'SET_FILTERED_CUSTOMERS',
  setNotFound: 'SET_NOT_FOUND',
  setSelectedCustomers: 'SET_SELECTED_CUSTOMER',
})
