import Dialog, {
  DialogActions,
  DialogContent,
  DialogTitle,
} from 'material-ui/Dialog'
import Button from 'material-ui/Button'
import Grid from 'material-ui/Grid'
import PropTypes from 'prop-types'
import React from 'react'
import TextField from 'material-ui/TextField'
import { connect } from 'react-redux'
import { actions as editEmployeeActions } from '../redux/actions/editEmployeeActions'


const AdminResetPasswordDialog = ({
  open,
  password,
  confirmPassword,
  setPassword,
  setConfirmPassword,
  closeResetPassword,
  resetPassword,
}) => (
  <Dialog aria-labelledby='form-dialog-title' open={open}>
    <DialogTitle id='form-dialog-title'>Reset Password</DialogTitle>

    <DialogContent>
      <Grid container>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label='New Password'
            onChange={event => setPassword(event.target.value)}
            type='password'
            value={password}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label='Confirm Password'
            onChange={event => setConfirmPassword(event.target.value)}
            type='password'
            value={confirmPassword}
          />
        </Grid>
      </Grid>
    </DialogContent>

    <DialogActions style={{ marginRight: '20px', marginBottom: '20px' }}>
      <Button
        color='secondary'
        onClick={closeResetPassword}
        variant='raised'
      >
        Cancel
      </Button>
      <Button
        color='primary'
        disabled={password === '' || confirmPassword === '' || password !== confirmPassword}
        onClick={resetPassword}
        variant='raised'
      >
        Reset
      </Button>
    </DialogActions>
  </Dialog>
)


AdminResetPasswordDialog.propTypes = {
  closeResetPassword: PropTypes.func.isRequired,
  confirmPassword: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired,
  password: PropTypes.string.isRequired,
  resetPassword: PropTypes.func.isRequired,
  setConfirmPassword: PropTypes.func.isRequired,
  setPassword: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  open: state.employeeEditor.resetPasswordOpen,
  password: state.employeeEditor.password,
  confirmPassword: state.employeeEditor.confirmPassword,
})


const actions = {
  ...editEmployeeActions,
}

export default connect(mapStateToProps, actions)(AdminResetPasswordDialog)
