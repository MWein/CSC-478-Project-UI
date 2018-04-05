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


const AdminResetPasswordDialog = () => (
  <Dialog aria-labelledby='form-dialog-title' open>
    <DialogTitle id='form-dialog-title'>Reset Password</DialogTitle>

    <DialogContent>
      <Grid container>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label='New Password'
            type='password'
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label='Confirm Password'
            type='password'
          />
        </Grid>
      </Grid>
    </DialogContent>

    <DialogActions style={{ marginRight: '20px', marginBottom: '20px' }}>
      <Button
        color='secondary'
        variant='raised'
      >
          Cancel
      </Button>
      <Button
        color='primary'
        variant='raised'
      >
          Reset
      </Button>
    </DialogActions>
  </Dialog>
)


AdminResetPasswordDialog.propTypes = {
}

const mapStateToProps = state => ({
})


const actions = {
}

export default connect(mapStateToProps, actions)(AdminResetPasswordDialog)
