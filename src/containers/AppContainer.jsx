import LoadingDialog from '../components/LoadingDialog'
import LoginContainer from './LoginContainer'
import React from 'react'
import TransactionContainer from './TransactionContainer'
import CustomerLookupDialog from '../components/CustomerLookupDialog'

const AppContainer = () => (
  <div style={{ display: 'flex', justifyContent: 'center' }}>
    <LoadingDialog />
    <TransactionContainer />
  </div>
)

export default AppContainer
