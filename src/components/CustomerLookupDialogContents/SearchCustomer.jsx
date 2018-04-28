import Button from 'material-ui/Button'
import {
  DialogContent,
} from 'material-ui/Dialog'
import PropTypes from 'prop-types'
import React from 'react'
import TextField from 'material-ui/TextField'
import { connect } from 'react-redux'
import { actions as customerLookupActions } from '../../redux/actions/customerLookupActions'
import { humanReadablePhone } from '../../redux/selectors'


const SearchCustomerDialog = ({
  lName,
  phone,
  selectedCustomer,
  customerList,
  filteredCustomers,
  notFound,
  setSelectedCustomer,
  setNotFound,
  setFilteredCustomers,
  setLastName,
  setPhoneNumber,
  setMode,
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
        {customer.f_name} {customer.l_name} - {humanReadablePhone(customer.phone)}
      </Button>
    ))

    const addNewCustomerButton = () => (
      <Button onClick={() => setMode('add')} variant='raised'>
        Add New Customer
      </Button>
    )

    return customerTable.length > 0 ? (
      <div>
        {customerTable}
        <br /><br />
        {addNewCustomerButton()}
      </div>
    ) :
      (
        <div>
          {notFound ? (<div><div style={{ color: 'red' }}>Customer Not Found</div><br /></div>) : null}
          {addNewCustomerButton()}
        </div>
      )
  }


  const searchCustomers = () => {
    const newFilteredCustomers = phone === '' && lName === '' ? [] :
      customerList.filter(customer => customer.phone.includes(phone) && customer.l_name.toLowerCase().includes(lName.toLowerCase()))

    if (newFilteredCustomers.length === 0) {
      setNotFound(true)
    } else {
      setNotFound(false)
    }

    setFilteredCustomers(newFilteredCustomers)
  }

  return (
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
}


SearchCustomerDialog.propTypes = {
  customerList: PropTypes.array.isRequired,
  filteredCustomers: PropTypes.array.isRequired,
  lName: PropTypes.string.isRequired,
  notFound: PropTypes.bool.isRequired,
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
  lName: state.customerLookup.lName,
  phone: state.customerLookup.phone,
  selectedCustomer: state.customerLookup.selectedCustomer,
  customerList: state.customerLookup.customers,
  filteredCustomers: state.customerLookup.filteredCustomers,
  notFound: state.customerLookup.notFound,
})


const actions = {
  ...customerLookupActions,
}

export default connect(mapStateToProps, actions)(SearchCustomerDialog)
