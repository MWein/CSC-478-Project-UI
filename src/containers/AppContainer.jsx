import LoadingDialog from '../components/LoadingDialog'
import LoginContainer from './LoginContainer'
import React from 'react'

const AppContainer = () => (
  <div style={{ display: 'flex', justifyContent: 'center' }}>
    <LoadingDialog />
    <LoginContainer />
  </div>
)

export default AppContainer
