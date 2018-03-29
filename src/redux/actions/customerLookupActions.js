import createActions from './helpers/createActions'

export const {
  constants,
  actions,
} = createActions('customerLookup', {
  setPhoneNumber: 'SET_PHONE_NUMBER',
  setLastName: 'SET_LAST_NAME',
  setCustomers: 'SET_CUSTOMERS',
  setSelectedCustomers: 'SET_SELECTED_CUSTOMER',
})
