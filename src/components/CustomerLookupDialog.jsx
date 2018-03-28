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
      <DialogTitle id='form-dialog-title'>Customer Lookup</DialogTitle>
      <DialogContent>

        <TextField
          label='Phone Number'
        />
        
        &nbsp;&nbsp;&nbsp;
        OR
        &nbsp;&nbsp;&nbsp;&nbsp;
        
        <TextField
          label='Last Name'
        />

        &nbsp;

        <Button>
          Search
        </Button>


        <br /><br />


        <Button
          color='primary'
          style={{ width: '100%' }}
        >
          Mike Weinberg - 7088024340
        </Button>

        <Button
          color='primary'
          style={{ width: '100%' }}
        >
          Tony Weinberg - 7081234567
        </Button>



      </DialogContent>
      <DialogActions style={{ marginRight: '20px', marginBottom: '20px' }}>
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
