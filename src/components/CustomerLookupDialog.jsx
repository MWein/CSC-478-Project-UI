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
  phone,
  lName,
  selectedCustomer,
  customerList,
  filteredCustomers,
  notFound,
  setSelectedCustomer,
  setNotFound,
  setFilteredCustomers,
  setLastName,
  setPhoneNumber,
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

          <Button
            variant='raised'
          >
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
      <DialogTitle id='form-dialog-title'>Customer Lookup</DialogTitle>
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

        <Button
          onClick={searchCustomers}
          variant='raised'
        >
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
          disabled={Object.keys(selectedCustomer).length === 0}
          variant='raised'
        >
            Select
        </Button>
      </DialogActions>
    </div>
  )


  return (
    <Dialog
      aria-labelledby='form-dialog-title'
      open={open}
    >
      {searchCustomerDialog()}
    </Dialog>
  )
}


CustomerLookupDialog.propTypes = {
  closeCustomerLookup: PropTypes.func.isRequired,
  customerList: PropTypes.array.isRequired,
  filteredCustomers: PropTypes.array.isRequired,
  lName: PropTypes.string.isRequired,
  notFound: PropTypes.bool.isRequired,
  open: PropTypes.bool.isRequired,
  phone: PropTypes.string.isRequired,
  selectedCustomer: PropTypes.object.isRequired,
  setFilteredCustomers: PropTypes.func.isRequired,
  setLastName: PropTypes.func.isRequired,
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
})

const actions = {
  ...customerLookupActions,
}

export default connect(mapStateToProps, actions)(CustomerLookupDialog)
