import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog'
import Button from 'material-ui/Button'
import PropTypes from 'prop-types'
import React from 'react'
import TextField from 'material-ui/TextField'
import { connect } from 'react-redux'
import { actions as loginActions } from '../redux/actions/loginActions'


const ForgotPasswordDialog = ({
  open,
  username,
  step,
  securityQuestion,
  securityAnswer,
  setForgotPassword,
  setUsername,
  setSecurityAnswer,
  nextFPStep,
  resetFP,
}) => {
  const getUsernameContent = () => (
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

  const securityQuestionContent = () => (
    <div>
      <DialogContentText>
        {securityQuestion}
      </DialogContentText>
      <TextField
        autoFocus
        fullWidth
        label='Answer'
        margin='dense'
        onChange={event => setSecurityAnswer(event.target.value)}
        value={securityAnswer}
      />
    </div>
  )


  const contentByStep = () => {
    switch (step) {
      case 0: return {
        content: getUsernameContent(),
        button: 'Next',
      }
      case 1: return {
        content: securityQuestionContent(),
        button: 'Reset Password',
      }
      default: return {
        content: '',
        button: '',
      }
    }
  }
  const content = contentByStep()


  const primaryButtonClicked = () => {
    // Do an action

    nextFPStep()
  }
  const cancelButtonClicked = () => {
    setForgotPassword(false)
    setTimeout(resetFP, 500)
  }

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
          onClick={cancelButtonClicked}
        >
          Cancel
        </Button>
        <Button
          color='primary'
          onClick={primaryButtonClicked}
        >
          {content.button}
        </Button>
      </DialogActions>
    </Dialog>
  )
}


ForgotPasswordDialog.propTypes = {
  nextFPStep: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  resetFP: PropTypes.func.isRequired,
  securityAnswer: PropTypes.string.isRequired,
  securityQuestion: PropTypes.string.isRequired,
  setForgotPassword: PropTypes.func.isRequired,
  setSecurityAnswer: PropTypes.func.isRequired,
  setUsername: PropTypes.func.isRequired,
  step: PropTypes.number.isRequired,
  username: PropTypes.string.isRequired,
}

const mapStateToProps = state => ({
  open: state.login.forgotPassword,
  username: state.login.username,
  step: state.login.forgotPasswordStep,
  securityQuestion: state.login.securityQuestion,
  securityAnswer: state.login.securityAnswer,
})

const actions = {
  ...loginActions,
}

export default connect(mapStateToProps, actions)(ForgotPasswordDialog)
