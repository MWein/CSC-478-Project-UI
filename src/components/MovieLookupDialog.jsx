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
import SelectMovieCopy from '../components/MovieLookupDialogContents/SelectMovieCopy'
import { connect } from 'react-redux'


const MovieLookupDialog = ({
  open,
  mode,
}) => {
  const contentByMode = () => {
    switch (mode) {
      case 'movie': return {
        content: (<SearchMovie />),
        button: 'Next',
      }
      case 'copy': return {
        content: (<SelectMovieCopy />),
        button: 'Confirm',
      }
      default: return null
    }
  }

  const content = contentByMode()

  return (
    <Dialog aria-labelledby='form-dialog-title' open={open}>
      <DialogTitle id='form-dialog-title'>Movie Lookup</DialogTitle>

      {content.content}

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
          {content.button}
        </Button>
      </DialogActions>
    </Dialog>
  )
}


MovieLookupDialog.propTypes = {
  mode: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired,
}

const mapStateToProps = state => ({
  mode: 'movie',
  open: true,
})


const actions = {
}

export default connect(mapStateToProps, actions)(MovieLookupDialog)
