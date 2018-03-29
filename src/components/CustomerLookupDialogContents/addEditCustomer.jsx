import {
  DialogContent,
} from 'material-ui/Dialog'
import Grid from 'material-ui/Grid'
import PropTypes from 'prop-types'
import React from 'react'
import TextField from 'material-ui/TextField'
import { connect } from 'react-redux'
import { actions as customerLookupActions } from '../../redux/actions/customerLookupActions'


const addEditCustomerDialog = ({
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
}) => (
  <div>
    <DialogContent>
      <Grid container>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label='First Name'
            onChange={event => setFirstName(event.target.value)}
            value={fName}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label='Last Name'
            onChange={event => setLastName(event.target.value)}
            value={lName}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label='Phone Number'
            onChange={event => setPhoneNumber(event.target.value)}
            value={phone}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label='Email'
            onChange={event => setEmail(event.target.value)}
            value={email}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label='Address'
            onChange={event => setAddress(event.target.value)}
            value={address}
          />
        </Grid>
      </Grid>
    </DialogContent>
  </div>
)


addEditCustomerDialog.propTypes = {
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

export default connect(mapStateToProps, actions)(addEditCustomerDialog)
