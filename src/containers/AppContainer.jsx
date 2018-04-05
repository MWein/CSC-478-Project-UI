//import Button from 'material-ui/Button'
//import CustomerLookupDialog from '../components/CustomerLookupDialog'
import EmployeesContainer from './EmployeesContainer'
import ErrorMessageDialog from '../components/ErrorMessageDialog'
import Grid from 'material-ui/Grid'
import LoadingDialog from '../components/LoadingDialog'
import LoginContainer from './LoginContainer'
import NavBar from '../components/NavBar'
import PropTypes from 'prop-types'
import React from 'react'
import ReportsContainer from './ReportsContainer'
import UserSettingsContainer from './UserSettingsContainer'
import { connect } from 'react-redux'
//import TransactionContainer from './TransactionContainer'
import { actions as customerLookupActions } from '../redux/actions/customerLookupActions'


const AppContainer = ({
  page,
  token,
  //openCustomerLookup,
}) => {
  const router = () => {
    if (token === '') {
      return (
        <div>
          <LoginContainer />
        </div>
      )
    }

    switch (page) {
      case 'employees': return (<EmployeesContainer />)
      case 'reports': return (<ReportsContainer />)
      case 'settings': return (<UserSettingsContainer />)
      default: return null
    }
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
          {router()}
        </Grid>
      </Grid>
    </div>
  )
}

AppContainer.propTypes = {
  //openCustomerLookup: PropTypes.func.isRequired,
  page: PropTypes.string.isRequired,
  token: PropTypes.string.isRequired,
}

const mapStateToProps = state => ({
  token: state.app.token,
  page: state.app.page,
})

const actions = {
  ...customerLookupActions,
}

export default connect(mapStateToProps, actions)(AppContainer)
