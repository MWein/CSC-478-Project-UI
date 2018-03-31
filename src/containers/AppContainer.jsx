import Button from 'material-ui/Button'
import CustomerLookupDialog from '../components/CustomerLookupDialog'
import ErrorMessageDialog from '../components/ErrorMessageDialog'
import Grid from 'material-ui/Grid'
import LoadingDialog from '../components/LoadingDialog'
import LoginContainer from './LoginContainer'
import NavBar from '../components/NavBar'
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
        <div>
          <LoginContainer />
        </div>
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
    <div>
      <LoadingDialog />
      <ErrorMessageDialog />

      <Grid container>
        <Grid item xs={12}>
          <NavBar />
        </Grid>

        <Grid item xs={12}>
          <div style={{ display: 'flex', justifyContent: 'center', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', position: 'absolute' }}>
            {router()}
          </div>
        </Grid>
      </Grid>
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
