import Button from 'material-ui/Button'
import CustomerLookupDialog from '../components/CustomerLookupDialog'
import ErrorMessageDialog from '../components/ErrorMessageDialog'
import LoadingDialog from '../components/LoadingDialog'
import LoginContainer from './LoginContainer'
import PropTypes from 'prop-types'
import React from 'react'
import UserSettingsContainer from './UserSettingsContainer'
import { connect } from 'react-redux'
//import TransactionContainer from './TransactionContainer'
import { actions as customerLookupActions } from '../redux/actions/customerLookupActions'


const AppContainer = ({
  token,
  openCustomerLookup,
}) => {
  const router = () => {
    if (token === '') {
      return (
        <LoginContainer />
      )
    }

    return (
      <div>
        <Button
          color='secondary'
          onClick={() => openCustomerLookup(console.log)}
        >
          Customer Lookup
        </Button>
        <CustomerLookupDialog />
      </div>
    )
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <LoadingDialog />
      <ErrorMessageDialog />


      <UserSettingsContainer />
    </div>
  )
}

AppContainer.propTypes = {
  openCustomerLookup: PropTypes.func.isRequired,
  token: PropTypes.string.isRequired,
}

const mapStateToProps = state => ({
  token: state.app.token,
})

const actions = {
  ...customerLookupActions,
}

export default connect(mapStateToProps, actions)(AppContainer)
