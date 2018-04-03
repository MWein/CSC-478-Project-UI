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

// {
//   id: 'mawein',
//   f_name: 'Mike',
//   l_name: 'Weinberg',
//   role: 'admin',
//   active: true,
//   phone: '8675309',
//   address: '',
//   timestamp: '2018-04-02T18:30:45.669-05:00',
// },

const EditEmployeeDialog = () => (
  <Dialog aria-labelledby='form-dialog-title' open>
    <DialogTitle id='form-dialog-title'>New Employee</DialogTitle>

    <DialogContent>
      <div style={{ width: '400px' }}>
        <Grid container>
          <Grid item xs={6}>
            <TextField label='Username' />
          </Grid>
          <Grid item xs={6}>
          Active Switch
          </Grid>

          <Grid item xs={6}>
            <TextField label='First Name' />
          </Grid>
          <Grid item xs={6}>
            <TextField label='Last Name' />
          </Grid>

          <Grid item xs={12}>
          Role Dropdown
          </Grid>
          <Grid item xs={6}>
            <TextField label='Phone Number' />
          </Grid>
          <Grid item xs={6}>
            <TextField label='Address' />
          </Grid>
        </Grid>
      </div>
    </DialogContent>

    <DialogActions style={{ marginRight: '20px', marginBottom: '20px' }}>
      <Button
        color='secondary'
        variant='raised'
      >
        Deactivate
      </Button>
      <Button
        color='primary'
        variant='raised'
      >
        Submit
      </Button>
    </DialogActions>
  </Dialog>
)


EditEmployeeDialog.propTypes = {
}

const mapStateToProps = state => ({
})


const actions = {
}

export default connect(mapStateToProps, actions)(EditEmployeeDialog)
