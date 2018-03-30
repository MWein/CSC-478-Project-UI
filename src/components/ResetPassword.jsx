import Button from 'material-ui/Button'
import Grid from 'material-ui/Grid'
import Paper from 'material-ui/Paper'
import PropTypes from 'prop-types'
import React from 'react'
import TextField from 'material-ui/TextField'
import { connect } from 'react-redux'
import { actions as settingsActions } from '../redux/actions/UserSettingsActions'


const ResetPassword = ({
  recoveryMode,
  oldPassword,
  newPassword,
  setOldPassword,
  setNewPassword,
}) => {
  const paperPadding = '30px'
  const style = {
    paper: {
      width: '350px',
      paddingTop: paperPadding,
      paddingBottom: paperPadding,
      paddingLeft: paperPadding,
      paddingRight: paperPadding,
    },
    title: {
      fontSize: 20,
    },
  }

  return (
    <Paper style={style.paper}>
      <Grid container>
        <Grid item xs={12}>
          <div style={style.title}>
            Change Password
          </div>
        </Grid>

        <Grid item xs={12}>
          <TextField
            fullWidth
            label='Old Password'
            onChange={event => setOldPassword(event.target.value)}
            value={oldPassword}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            fullWidth
            label='New Password'
            onChange={event => setNewPassword(event.target.value)}
            value={newPassword}
          />
        </Grid>

        <Grid item xs={12}>
          <div style={{ width: '100%', textAlign: 'right' }}>
            <Button
              color='primary'
              variant='raised'
            >
                Reset Password
            </Button>
          </div>
        </Grid>
      </Grid>
    </Paper>
  )
}


ResetPassword.propTypes = {
  newPassword: PropTypes.string.isRequired,
  oldPassword: PropTypes.string.isRequired,
  recoveryMode: PropTypes.bool.isRequired,
  setNewPassword: PropTypes.func.isRequired,
  setOldPassword: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  recoveryMode: state.settings.recoveryMode,
  oldPassword: state.settings.oldPassword,
  newPassword: state.settings.newPassword,
})

const actions = {
  ...settingsActions,
}

export default connect(mapStateToProps, actions)(ResetPassword)
