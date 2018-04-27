import Dialog, {
  DialogActions,
  DialogTitle,
} from 'material-ui/Dialog'
import {
  validateEmail,
  validatePhone,
} from '../redux/selectors'
import AddEditCustomerDialog from './CustomerLookupDialogContents/AddEditCustomer'
import Button from 'material-ui/Button'
import PropTypes from 'prop-types'
import React from 'react'
import SearchCustomerDialog from './CustomerLookupDialogContents/SearchCustomer'
import { connect } from 'react-redux'
import { actions as customerLookupActions } from '../redux/actions/customerLookupActions'


const CustomerLookupDialog = ({
  open,
  selectedCustomer,
  mode,
  fName,
  lName,
  phone,
  email,
  editCustomer,
  createNewCustomer,
  setFirstName,
  setLastName,
  setPhoneNumber,
  setEmail,
  setAddress,
  setMode,
  closeCustomerLookup,
  setSelectedCustomer,
  getAllCustomers,
}) => {
  const addCustomerAction = () => {
    createNewCustomer()
    getAllCustomers()
    closeCustomerLookup()
  }

  const editCustomerAction = () => {
    editCustomer()
    getAllCustomers()
    closeCustomerLookup()
  }

  const closeAction = () => {
    closeCustomerLookup()
    setSelectedCustomer({})
  }


  const selectAction = () => {
    setMode('edit')
    setFirstName(selectedCustomer.f_name)
    setLastName(selectedCustomer.l_name)
    setPhoneNumber(selectedCustomer.phone)
    setEmail(selectedCustomer.email)
    setAddress(selectedCustomer.address)
  }

  const calcConfirmButtonProps = () => {
    const selectButtonDisabled = () => {
      if (mode === '') {
        return Object.keys(selectedCustomer).length === 0
      }
    }

    const addEditFormValidation = () => {
      if (fName === '' || lName === '' || phone === '' || email === '') {
        return true
      }

      return !(validateEmail(email) && validatePhone(phone))
    }

    switch (mode) {
      case 'add': return {
        text: 'Create',
        action: addCustomerAction,
        disabled: addEditFormValidation(),
      }
      case 'edit': return {
        text: 'Verify',
        action: editCustomerAction,
        disabled: addEditFormValidation(),
      }
      default: return {
        text: 'Select',
        action: selectAction,
        disabled: selectButtonDisabled(),
      }
    }
  }
  const confirmButtonProps = calcConfirmButtonProps()


  return (
    <Dialog aria-labelledby='form-dialog-title' open={open}>
      <DialogTitle id='form-dialog-title'>Customer Lookup</DialogTitle>

      {mode === '' ? (<SearchCustomerDialog />) : (<AddEditCustomerDialog />)}

      <DialogActions style={{ marginRight: '20px', marginBottom: '20px' }}>
        <Button
          color='secondary'
          onClick={closeAction}
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
  createNewCustomer: PropTypes.func.isRequired,
  editCustomer: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  fName: PropTypes.string.isRequired,
  getAllCustomers: PropTypes.func.isRequired,
  lName: PropTypes.string.isRequired,
  mode: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired,
  phone: PropTypes.string.isRequired,
  selectedCustomer: PropTypes.object.isRequired,
  setAddress: PropTypes.func.isRequired,
  setEmail: PropTypes.func.isRequired,
  setFirstName: PropTypes.func.isRequired,
  setLastName: PropTypes.func.isRequired,
  setMode: PropTypes.func.isRequired,
  setPhoneNumber: PropTypes.func.isRequired,
  setSelectedCustomer: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  open: state.customerLookup.open,
  selectedCustomer: state.customerLookup.selectedCustomer,
  mode: state.customerLookup.mode,
  phone: state.customerLookup.phone,
  fName: state.customerLookup.fName,
  lName: state.customerLookup.lName,
  email: state.customerLookup.email,
})


const actions = {
  ...customerLookupActions,
}

export default connect(mapStateToProps, actions)(CustomerLookupDialog)
