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
  currentPassword,
  setOldPassword,
  setNewPassword,
}) => {
  const paperPadding = '30px'
  const style = {
    paper: {
      paddingTop: paperPadding,
      paddingBottom: paperPadding,
      paddingLeft: paperPadding,
      paddingRight: paperPadding,
    },
    title: {
      fontSize: 20,
    },
  }


  const resetPassword = () => {
    if (recoveryMode || oldPassword === currentPassword) {
      console.log('Run change password saga')
    } else {
      console.log('NOOOOOOO')
    }
  }


  const validate = () => newPassword === '' ? false : recoveryMode || oldPassword !== ''


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
            disabled={recoveryMode}
            fullWidth
            label='Old Password'
            onChange={event => setOldPassword(event.target.value)}
            type='password'
            value={oldPassword}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            fullWidth
            label='New Password'
            onChange={event => setNewPassword(event.target.value)}
            type='password'
            value={newPassword}
          />
        </Grid>

        <Grid item xs={12}>
          <div style={{ width: '100%', textAlign: 'right' }}>
            <Button
              color='primary'
              disabled={!validate()}
              onClick={resetPassword}
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
  currentPassword: PropTypes.string.isRequired,
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
  currentPassword: state.login.password,
})

const actions = {
  ...settingsActions,
}

export default connect(mapStateToProps, actions)(ResetPassword)
