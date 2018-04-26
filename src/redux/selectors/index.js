/* eslint-disable no-useless-escape */

// Universal 
export const getToken = state => state.app.token
export const validateEmail = email =>
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    .test(email)

// Password and Security Question Specific
export const requireSecurityQuestion = state => state.app.requireSecurityQuestion
export const recoveryMode = state => state.settings.recoveryMode
export const getSecurityQuestion = state => state.settings.securityQuestion
export const getSecurityAnswer = state => state.settings.securityAnswer

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

// Settings specific
export const getNewPassword = state => state.settings.newPassword

// Employee Page
export const getEmployeeList = state => state.employees.employeeList

// Employee Editor Specific
export const getEmployeeId = state => state.employeeEditor.username
export const getEmployeeActive = state => state.employeeEditor.employeeActive
export const getEmployeePin = state => state.employeeEditor.password
export const getEmployeeRole = state => state.employeeEditor.type
export const getEmployeeFName = state => state.employeeEditor.firstName
export const getEmployeeLName = state => state.employeeEditor.lastName
export const getEmployeePhone = state => state.employeeEditor.phone
export const getEmployeeAddress = state => state.employeeEditor.address

// Movie Lookup Specific
export const getMovieUPC = state => state.movieLookup.upc
export const getMovieCopyID = state => state.movieLookup.copyID
export const getNewCopy = state => state.movieLookup.newMovieCopy
export const getMovieCopiesList = state => state.movieLookup.copiesList

// Create movie dialog specific
export const getNewMovieTitle = state => state.movieLookup.newMovieTitle
export const getNewMovieUPC = state => state.movieLookup.newMovieUPC

// Transaction Lookup Specific
export const getMovieList = state => state.transaction.movieList
export const getCustomer = state => state.transaction.customer
