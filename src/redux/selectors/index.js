export const getToken = state => state.app.token

export const getUsername = state => state.login.username
export const getPassword = state => state.login.password
export const getSecAnswer = state => state.login.securityAnswer

export const validateEmail = email =>
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    .test(email)
