import Dialog, {
  DialogActions,
  //DialogContent,
  DialogTitle,
} from 'material-ui/Dialog'
import Button from 'material-ui/Button'
import PropTypes from 'prop-types'
import React from 'react'
import SearchMovie from '../components/MovieLookupDialogContents/SearchMovie'
//import TextField from 'material-ui/TextField'
import { connect } from 'react-redux'


const MovieLookupDialog = () => (
  <Dialog aria-labelledby='form-dialog-title' open={open}>
    <DialogTitle id='form-dialog-title'>Movie Lookup</DialogTitle>

    <SearchMovie />

    <DialogActions style={{ marginRight: '20px', marginBottom: '20px' }}>
      <Button
        color='secondary'
      >
          Cancel
      </Button>
      <Button
        color='primary'
        variant='raised'
      >
          Confirm
      </Button>
    </DialogActions>
  </Dialog>
)


MovieLookupDialog.propTypes = {
}

const mapStateToProps = state => ({
})


const actions = {
}

export default connect(mapStateToProps, actions)(MovieLookupDialog)
