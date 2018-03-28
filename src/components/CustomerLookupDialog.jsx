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



const CustomerLookupDialog = () => {
  return (
    <Dialog
      aria-labelledby='form-dialog-title'
      open
    >
      <DialogTitle id='form-dialog-title'>This is the title</DialogTitle>
      <DialogContent>
        Dialog content
      </DialogContent>
      <DialogActions>
        <Button
          color='secondary'
        >
          Cancel
        </Button>
        <Button
          color='primary'
        >
          Some button
        </Button>
      </DialogActions>
    </Dialog>
  )
}


CustomerLookupDialog.propTypes = {
}

const mapStateToProps = state => ({
})

const actions = {
}

export default connect(mapStateToProps, actions)(CustomerLookupDialog)
