import Button from 'material-ui/Button'
import Grid from 'material-ui/Grid'
import Paper from 'material-ui/Paper'
import PropTypes from 'prop-types'
import React from 'react'
import TextField from 'material-ui/TextField'
import { connect } from 'react-redux'
import { actions as errorMessageActions } from '../redux/actions/errorMessageActions'
import { actions as settingsActions } from '../redux/actions/UserSettingsActions'


const ResetPassword = ({
  recoveryMode,
  oldPassword,
  newPassword,
  currentPassword,
  passwordChangeSuccess,
  setOldPassword,
  setNewPassword,
  changePassword,
  setPasswordChangeSuccess,
  displayError,
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


  const header = () => (
    <div>
      Change Password {passwordChangeSuccess ? (<span style={{ color: 'green' }}>- Success</span>) : ''}
    </div>
  )


  const typeOldPassword = value => {
    setPasswordChangeSuccess(false)
    setOldPassword(value)
  }

  const typeNewPassword = value => {
    setPasswordChangeSuccess(false)
    setNewPassword(value)
  }


  const resetPassword = () => {
    if (recoveryMode || oldPassword === currentPassword) {
      changePassword()
    } else {
      displayError('Invalid Password')
    }
  }


  const validate = () => newPassword === '' ? false : recoveryMode || oldPassword !== ''


  return (
    <Paper style={style.paper}>
      <Grid container>
        <Grid item xs={12}>
          <div style={style.title}>
            {header()}
          </div>
        </Grid>

        <Grid item xs={12}>
          <TextField
            disabled={recoveryMode}
            fullWidth
            label='Old Password'
            onChange={event => typeOldPassword(event.target.value)}
            type='password'
            value={oldPassword}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            fullWidth
            label='New Password'
            onChange={event => typeNewPassword(event.target.value)}
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
  changePassword: PropTypes.func.isRequired,
  currentPassword: PropTypes.string.isRequired,
  displayError: PropTypes.func.isRequired,
  newPassword: PropTypes.string.isRequired,
  oldPassword: PropTypes.string.isRequired,
  passwordChangeSuccess: PropTypes.bool.isRequired,
  recoveryMode: PropTypes.bool.isRequired,
  setNewPassword: PropTypes.func.isRequired,
  setOldPassword: PropTypes.func.isRequired,
  setPasswordChangeSuccess: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  recoveryMode: state.settings.recoveryMode,
  oldPassword: state.settings.oldPassword,
  newPassword: state.settings.newPassword,
  currentPassword: state.login.password,
  passwordChangeSuccess: state.settings.passwordChangeSuccess,
})

const actions = {
  ...settingsActions,
  ...errorMessageActions,
}

export default connect(mapStateToProps, actions)(ResetPassword)
