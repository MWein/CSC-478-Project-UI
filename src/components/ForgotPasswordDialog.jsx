import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog'
import Button from 'material-ui/Button'
import Checkbox from 'material-ui/Checkbox'
import { FormControlLabel } from 'material-ui/Form'
import Paper from 'material-ui/Paper'
import PropTypes from 'prop-types'
import React from 'react'
import TextField from 'material-ui/TextField'
import { connect } from 'react-redux'
import { actions as loginActions } from '../redux/actions/loginActions'


const ForgotPasswordDialog = ({
  open,
  username,
  setForgotPassword,
  setUsername,
}) => {

  const getUsernameContent = () => {
    return (
      <div>
        <TextField
          autoFocus
          fullWidth
          label='Username'
          margin='dense'
          onChange={event => setUsername(event.target.value)}
          value={username}
        />
      </div>
    )
  }


  const contentByStep = () => {
    return {
      content: getUsernameContent(),
      button: 'Next',
    }
  }
  const content = contentByStep()


  return (
    <Dialog
      aria-labelledby='form-dialog-title'
      open={open}
    >
      <DialogTitle id='form-dialog-title'>Reset Password</DialogTitle>
      <DialogContent>
        {content.content}
      </DialogContent>
      <DialogActions>
        <Button
          color='primary'
          onClick={() => setForgotPassword(false)}
        >
          Cancel
        </Button>
        <Button color='primary'>
          {content.button}
        </Button>
      </DialogActions>
    </Dialog>
  )
}


ForgotPasswordDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  setForgotPassword: PropTypes.func.isRequired,
  setUsername: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
}

const mapStateToProps = state => ({
  open: state.login.forgotPassword,
  username: state.login.username,
})

const actions = {
  ...loginActions,
}

export default connect(mapStateToProps, actions)(ForgotPasswordDialog)
