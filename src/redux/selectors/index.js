// Universal 
export const getToken = state => state.app.token
export const validateEmail = email =>
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    .test(email)

// Login controller specific
export const getUsername = state => state.login.username
export const getPassword = state => state.login.password
export const getSecAnswer = state => state.login.securityAnswer

// LookupCustomerDialog specific
export const getCallbackFunction = state => state.customerLookup.callbackFunction
export const getSelectedCustomer = state => state.customerLookup.selectedCustomer
export const getCustomerFirstName = state => state.customerLookup.fName
export const getCustomerLastName = state => state.customerLookup.lName
export const getCustomerPhoneNumber = state => state.customerLookup.phone
export const getCustomerEmail = state => state.customerLookup.email
export const getCustomerAddress = state => state.customerLookup.address
