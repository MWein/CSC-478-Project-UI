import Dialog, {
  DialogActions,
  DialogContent,
  DialogTitle,
} from 'material-ui/Dialog'
import Button from 'material-ui/Button'
import PropTypes from 'prop-types'
import React from 'react'
import TextField from 'material-ui/TextField'
import { connect } from 'react-redux'
import { actions as customerLookupActions } from '../redux/actions/customerLookupActions'


const CustomerLookupDialog = ({
  open,
  selectedCustomer,
  customerList,
  closeCustomerLookup,
}) => {
  const customerListTable = () => customerList.map(customer => (
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
      open={open}
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
          onClick={closeCustomerLookup}
        >
          Cancel
        </Button>
        <Button
          color='primary'
          disabled={selectedCustomer === ''}
          variant='raised'
        >
          Select
        </Button>
      </DialogActions>
    </Dialog>
  )
}


CustomerLookupDialog.propTypes = {
  closeCustomerLookup: PropTypes.func.isRequired,
  customerList: PropTypes.array.isRequired,
  open: PropTypes.bool.isRequied,
  selectedCustomer: PropTypes.string.isRequred,
}

const mapStateToProps = state => ({
  customerList: state.customerLookup.customers,
  open: state.customerLookup.open,
  selectedCustomer: state.customerLookup.selectedCustomer,
})

const actions = {
  ...customerLookupActions,
}

export default connect(mapStateToProps, actions)(CustomerLookupDialog)
