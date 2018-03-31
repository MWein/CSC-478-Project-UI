import {
  DialogContent,
} from 'material-ui/Dialog'
import Grid from 'material-ui/Grid'
import PropTypes from 'prop-types'
import React from 'react'
import TextField from 'material-ui/TextField'
import { connect } from 'react-redux'
import { actions as customerLookupActions } from '../../redux/actions/customerLookupActions'


const AddEditCustomerDialog = ({
  fName,
  lName,
  phone,
  email,
  address,
  setFirstName,
  setLastName,
  setPhoneNumber,
  setEmail,
  setAddress,
}) => {
  const customTextField = (label, onChangeAction, value) => (
    <TextField
      fullWidth
      label={label}
      onChange={onChangeAction}
      value={value}
    />
  )

  return (
    <div>
      <DialogContent>
        <Grid container>
          <Grid item xs={12}>
            {customTextField('First Name - Required', event => setFirstName(event.target.value), fName)}
          </Grid>
          <Grid item xs={12}>
            {customTextField('Last Name - Required', event => setLastName(event.target.value), lName)}
          </Grid>
          <Grid item xs={12}>
            {customTextField('Phone Number - Required', event => setPhoneNumber(event.target.value), phone)}
          </Grid>
          <Grid item xs={12}>
            {customTextField('Email - Required', event => setEmail(event.target.value), email)}
          </Grid>
          <Grid item xs={12}>
            {customTextField('Address', event => setAddress(event.target.value), address)}
          </Grid>
        </Grid>
      </DialogContent>
    </div>
  )
}


AddEditCustomerDialog.propTypes = {
  address: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  fName: PropTypes.string.isRequired,
  lName: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  setAddress: PropTypes.func.isRequired,
  setEmail: PropTypes.func.isRequired,
  setFirstName: PropTypes.func.isRequired,
  setLastName: PropTypes.func.isRequired,
  setPhoneNumber: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  phone: state.customerLookup.phone,
  fName: state.customerLookup.fName,
  lName: state.customerLookup.lName,
  email: state.customerLookup.email,
  address: state.customerLookup.address,
})

const actions = {
  ...customerLookupActions,
}

export default connect(mapStateToProps, actions)(AddEditCustomerDialog)
