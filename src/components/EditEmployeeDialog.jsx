import Dialog, {
  DialogActions,
  DialogContent,
  DialogTitle,
} from 'material-ui/Dialog'
import Button from 'material-ui/Button'
import Grid from 'material-ui/Grid'
import { MenuItem } from 'material-ui/Menu'
import PropTypes from 'prop-types'
import React from 'react'
import Select from 'material-ui/Select'
import TextField from 'material-ui/TextField'
import { connect } from 'react-redux'
import { actions as employeeActions } from '../redux/actions/editEmployeeActions'


const EditEmployeeDialog = ({
  open,
  mode,
  username,
  employeeType,
  password,
  confirmPassword,
  firstName,
  lastName,
  phone,
  address,
  thisUserRole,
  setUsername,
  setEmployeeType,
  setFirstName,
  setLastName,
  setPhoneNumber,
  setAddress,
  setPassword,
  setConfirmPassword,
}) => {
  const dialogTitle = () => {
    switch (mode) {
      case 'edit': return 'Edit Employee'
      case 'add': return 'New Employee'
      default: return ''
    }
  }

  const deactivateButton = () => mode === 'edit' ? (
    <Button
      color='secondary'
      variant='raised'
    >
        Deactivate
    </Button>
  ) : null


  const resetPasswordButton = () => thisUserRole === 'admin' && mode === 'edit' ? (
    <Button
      color='secondary'
      variant='raised'
    >
        Reset Password
    </Button>
  ) : null


  const passwordField = () => mode === 'add' ? (
    <Grid item xs={6}>
      <TextField
        label='Password'
        onChange={event => setPassword(event.target.value)}
        type='password'
        value={password}
      />
    </Grid>
  ) : null

  const confirmPasswordField = () => mode === 'add' ? (
    <Grid item xs={6}>
      <TextField
        label='Confirm Password'
        onChange={event => setConfirmPassword(event.target.value)}
        type='password'
        value={confirmPassword}
      />
    </Grid>
  ) : null


  return (
    <Dialog aria-labelledby='form-dialog-title' open={open}>
      <DialogTitle id='form-dialog-title'>{dialogTitle()}</DialogTitle>

      <DialogContent>
        <div style={{ width: '400px' }}>
          <Grid container>
            <Grid item xs={6}>
              <TextField
                disabled={mode === 'edit'}
                onChange={event => setUsername(event.target.value)}
                placeholder='Username'
                value={username}
              />
            </Grid>
            <Grid item xs={6}>
              <Select
                onChange={event => setEmployeeType(event.target.value)}
                style={{ width: '100%' }}
                value={employeeType}
              >
                <MenuItem value={'employee'}>Employee</MenuItem>
                <MenuItem value={'manager'}>Manager</MenuItem>
                <MenuItem value={'admin'}>Admin</MenuItem>
              </Select>
            </Grid>

            <Grid item xs={6}>
              <TextField
                label='First Name'
                onChange={event => setFirstName(event.target.value)}
                value={firstName}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label='Last Name'
                onChange={event => setLastName(event.target.value)}
                value={lastName}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label='Phone Number'
                onChange={event => setPhoneNumber(event.target.value)}
                value={phone}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label='Address'
                onChange={event => setAddress(event.target.value)}
                value={address}
              />
            </Grid>

            {passwordField()}
            {confirmPasswordField()}

          </Grid>
        </div>
      </DialogContent>

      <DialogActions style={{ marginRight: '20px', marginBottom: '20px' }}>
        {resetPasswordButton()}
        {deactivateButton()}
        <Button
          color='primary'
          variant='raised'
        >
        Save
        </Button>
      </DialogActions>
    </Dialog>
  )
}


EditEmployeeDialog.propTypes = {
  address: PropTypes.string.isRequired,
  confirmPassword: PropTypes.string.isRequired,
  employeeType: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  mode: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired,
  password: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  setAddress: PropTypes.func.isRequired,
  setConfirmPassword: PropTypes.func.isRequired,
  setEmployeeType: PropTypes.func.isRequired,
  setFirstName: PropTypes.func.isRequired,
  setLastName: PropTypes.func.isRequired,
  setPassword: PropTypes.func.isRequired,
  setPhoneNumber: PropTypes.func.isRequired,
  setUsername: PropTypes.func.isRequired,
  thisUserRole: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
}

const mapStateToProps = state => ({
  thisUserRole: 'admin',
  open: state.employeeEditor.open,
  mode: state.employeeEditor.mode,
  username: state.employeeEditor.username,
  employeeType: state.employeeEditor.type,
  password: state.employeeEditor.password,
  confirmPassword: state.employeeEditor.confirmPassword,
  firstName: state.employeeEditor.firstName,
  lastName: state.employeeEditor.lastName,
  phone: state.employeeEditor.phone,
  address: state.employeeEditor.address,
})


const actions = {
  ...employeeActions,
}

export default connect(mapStateToProps, actions)(EditEmployeeDialog)
