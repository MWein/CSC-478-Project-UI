import Dialog, {
  DialogActions,
  DialogContent,
  DialogTitle,
} from 'material-ui/Dialog'
import Button from 'material-ui/Button'
import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'
import { actions as errorActions } from '../redux/actions/errorMessageActions'


const ErrorMessageDialog = ({
  error,
  message,
  dismissError,
}) => {
  return (
    <Dialog aria-labelledby='form-dialog-title' open={error}>
      <DialogTitle id='form-dialog-title'>Error</DialogTitle>

      <DialogContent>
        {message}
      </DialogContent>

      <DialogActions style={{ marginRight: '20px', marginBottom: '20px' }}>
        <Button
          color='primary'
          onClick={dismissError}
          variant='raised'
        >
          OK
        </Button>
      </DialogActions>
    </Dialog>
  )
}


ErrorMessageDialog.propTypes = {
  dismissError: PropTypes.func.isRequired,
  error: PropTypes.bool.isRequired,
  message: PropTypes.string.isRequired,
}

const mapStateToProps = state => ({
  error: state.error.error,
  message: state.error.message,
})


const actions = {
  ...errorActions,
}

export default connect(mapStateToProps, actions)(ErrorMessageDialog)
