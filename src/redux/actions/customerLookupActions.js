import createActions from './helpers/createActions'

export const {
  constants,
  actions,
} = createActions('customerLookup', {
  setFirstName: 'SET_FIRST_NAME',
  setLastName: 'SET_LAST_NAME',
  setPhoneNumber: 'SET_PHONE_NUMBER',
  setEmail: 'SET_EMAIL',
  setAddress: 'SET_ADDRESS',

  getAllCustomers: 'GET_ALL_CUSTOMERS',
  openCustomerLookup: 'OPEN_CUSTOMER_LOOKUP',
  closeCustomerLookup: 'CLOSE_CUSTOMER_LOOKUP',
  setCustomers: 'SET_CUSTOMERS',
  setFilteredCustomers: 'SET_FILTERED_CUSTOMERS',
  setNotFound: 'SET_NOT_FOUND',
  setSelectedCustomer: 'SET_SELECTED_CUSTOMER',
  setMode: 'SET_MODE',
})
