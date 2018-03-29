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
import { actions as customerLookupActions } from '../redux/actions/customerLookupActions'


const CustomerLookupDialog = ({
  open,
  phone,
  lName,
  selectedCustomer,
  customerList,
  filteredCustomers,
  notFound,
  mode,
  setSelectedCustomer,
  setNotFound,
  setFilteredCustomers,
  setLastName,
  setPhoneNumber,
  setMode,
  closeCustomerLookup,
}) => {
  const customerListTable = () => {
    const customerTable = filteredCustomers.map(customer => (
      <Button
        color='primary'
        key={customer.id}
        onClick={() => setSelectedCustomer(customer)}
        style={{ width: '100%' }}
        variant={customer === selectedCustomer ? 'raised' : 'flat'}
      >
        {customer.f_name} {customer.l_name} - {customer.phone}
      </Button>
    ))

    const notFoundText = () => notFound ?
      (
        <div>
          <div style={{ color: 'red' }}>
            Customer Not Found
          </div>
          <br />
        </div>
      ) :
      null

    return customerTable.length > 0 ? customerTable :
      (
        <div>
          {notFoundText()}

          <Button onClick={() => setMode('add')} variant='raised'>
            Add New Customer
          </Button>
        </div>
      )
  }


  const searchCustomers = () => {
    const newFilteredCustomers = phone === '' && lName === '' ? [] :
      customerList.filter(customer => customer.phone.includes(phone) && customer.l_name.includes(lName))

    if (newFilteredCustomers.length === 0) {
      setNotFound(true)
    } else {
      setNotFound(false)
    }

    setFilteredCustomers(newFilteredCustomers)
  }


  const searchCustomerDialog = () => (
    <div>
      <DialogContent>

        <TextField
          label='Phone Number'
          onChange={event => setPhoneNumber(event.target.value)}
          value={phone}
        />

          &nbsp;&nbsp;&nbsp;
          OR
          &nbsp;&nbsp;&nbsp;&nbsp;

        <TextField
          label='Last Name'
          onChange={event => setLastName(event.target.value)}
          value={lName}
        />

          &nbsp;&nbsp;

        <Button onClick={searchCustomers} variant='raised'>
            Search
        </Button>


        <br /><br />
        {customerListTable()}

      </DialogContent>
    </div>
  )

  const addEditCustomerDialog = () => (
    <div>
      <DialogContent>
        <Grid container>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label='First Name'
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label='Last Name'
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label='Phone Number'
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label='Email'
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label='Address'
            />
          </Grid>
        </Grid>
      </DialogContent>
    </div>
  )


  const router = () => mode === '' ?
    searchCustomerDialog() :
    addEditCustomerDialog()


  const calcConfirmButtonProps = () => {
    const confirmButtonDisabled = () => {
      if (mode === '') {
        return Object.keys(selectedCustomer).length === 0
      }
    }

    switch (mode) {
      case 'add': return {
        text: 'Create',
        action: null,
        disabled: confirmButtonDisabled(),
      }
      case 'edit': return {
        text: 'Verify',
        action: null,
        disabled: confirmButtonDisabled(),
      }
      default: return {
        text: 'Select',
        action: () => setMode('edit'),
        disabled: confirmButtonDisabled(),
      }
    }
  }
  const confirmButtonProps = calcConfirmButtonProps()


  return (
    <Dialog aria-labelledby='form-dialog-title' open={open}>
      <DialogTitle id='form-dialog-title'>Customer Lookup</DialogTitle>
      {router()}

      <DialogActions style={{ marginRight: '20px', marginBottom: '20px' }}>
        <Button
          color='secondary'
          onClick={closeCustomerLookup}
        >
            Cancel
        </Button>
        <Button
          color='primary'
          disabled={confirmButtonProps.disabled}
          onClick={confirmButtonProps.action}
          variant='raised'
        >
          {confirmButtonProps.text}
        </Button>
      </DialogActions>
    </Dialog>
  )
}


CustomerLookupDialog.propTypes = {
  closeCustomerLookup: PropTypes.func.isRequired,
  customerList: PropTypes.array.isRequired,
  filteredCustomers: PropTypes.array.isRequired,
  lName: PropTypes.string.isRequired,
  mode: PropTypes.string.isRequired,
  notFound: PropTypes.bool.isRequired,
  open: PropTypes.bool.isRequired,
  phone: PropTypes.string.isRequired,
  selectedCustomer: PropTypes.object.isRequired,
  setFilteredCustomers: PropTypes.func.isRequired,
  setLastName: PropTypes.func.isRequired,
  setMode: PropTypes.func.isRequired,
  setNotFound: PropTypes.func.isRequired,
  setPhoneNumber: PropTypes.func.isRequired,
  setSelectedCustomer: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  customerList: state.customerLookup.customers,
  open: state.customerLookup.open,
  selectedCustomer: state.customerLookup.selectedCustomer,
  phone: state.customerLookup.phone,
  lName: state.customerLookup.lName,
  filteredCustomers: state.customerLookup.filteredCustomers,
  notFound: state.customerLookup.notFound,
  mode: state.customerLookup.mode,
})

const actions = {
  ...customerLookupActions,
}

export default connect(mapStateToProps, actions)(CustomerLookupDialog)
