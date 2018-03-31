import Grid from 'material-ui/Grid'
import PropTypes from 'prop-types'
import React from 'react'
import ResetPassword from '../components/ResetPassword'
import SetSecurityQuestion from '../components/SetSecurityQuestion'
import { connect } from 'react-redux'

const UserSettingsContainer = () => (
  <div style={{ display: 'flex', justifyContent: 'center' }}>

    <Grid container>
      <Grid item xs={6}>
        <ResetPassword />
      </Grid>

      <Grid item xs={6}>
        <SetSecurityQuestion />
      </Grid>
    </Grid>


  </div>
)

UserSettingsContainer.propTypes = {
}

const mapStateToProps = state => ({
})

const actions = {
}

export default connect(mapStateToProps, actions)(UserSettingsContainer)
