import CustomerLookupDialog from '../components/CustomerLookupDialog'
import LoadingDialog from '../components/LoadingDialog'
import LoginContainer from './LoginContainer'
import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'
//import TransactionContainer from './TransactionContainer'


const AppContainer = ({
  token,
}) => {
  const router = () => {
    if (token === '') {
      return (
        <LoginContainer />
      )
    }

    return (
      <CustomerLookupDialog />
    )
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <LoadingDialog />
      {router()}
    </div>
  )
}

AppContainer.propTypes = {
  token: PropTypes.string.isRequired,
}

const mapStateToProps = state => ({
  token: state.app.token,
})

const actions = {
}

export default connect(mapStateToProps, actions)(AppContainer)
