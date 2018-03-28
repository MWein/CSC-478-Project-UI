import CustomerLookupDialog from '../components/CustomerLookupDialog'
import LoadingDialog from '../components/LoadingDialog'
//import LoginContainer from './LoginContainer'
import React from 'react'
//import TransactionContainer from './TransactionContainer'

const AppContainer = () => (
  <div style={{ display: 'flex', justifyContent: 'center' }}>
    <LoadingDialog />
    <CustomerLookupDialog />
  </div>
)

export default AppContainer
