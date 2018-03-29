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
  const testCustomerList = [
    {
      id: 'fvlcrwbwej',
      f_name: 'Sydney',
      l_name: 'Australia',
      phone: '123456',
      address: '123 Fake Street',
      active: true,
      email: 'something@yahoo.com',
    },
    {
      id: 'fdjksdksdfkjsfd',
      f_name: 'Jack',
      l_name: 'Bower',
      phone: '466789',
      address: '123 Fake Street',
      active: true,
      email: 'something@yahoo.com',
    },
  ]


  const customerListTable = () => testCustomerList.map(customer => (
    <Button
      color='primary'
      key={customer.id}
      style={{ width: '100%' }}
    >
      {customer.f_name} {customer.l_name} - {customer.phone}
    </Button>
  ))


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
        {customerListTable()}

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
