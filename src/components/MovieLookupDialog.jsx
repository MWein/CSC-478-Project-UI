import Dialog, {
  DialogActions,
  DialogTitle,
} from 'material-ui/Dialog'
import Button from 'material-ui/Button'
import PropTypes from 'prop-types'
import React from 'react'
import SearchMovie from '../components/MovieLookupDialogContents/SearchMovie'
import SelectMovieCopy from '../components/MovieLookupDialogContents/SelectMovieCopy'
import { connect } from 'react-redux'
import { actions as movieLookupActions } from '../redux/actions/movieLookupActions'


const MovieLookupDialog = ({
  open,
  mode,
  selectedMovie,
  selectedCopy,
  setMode,
  closeMovieLookup,
}) => {
  const validateButton = () => {
    if (mode === '') {
      return Object.keys(selectedMovie).length !== 0
    } else if (mode === 'copy') {
      return selectedCopy !== ''
    }

    return true
  }

  const contentByMode = () => {
    switch (mode) {
      case 'copy': return {
        content: (<SelectMovieCopy />),
        button: 'Confirm',
        buttonAction: null,
        title: selectedMovie.title,
      }
      default: return {
        content: (<SearchMovie />),
        button: 'Next',
        buttonAction: () => setMode('copy'),
        title: 'Movie Lookup',
      }
    }
  }
  const content = contentByMode()


  return (
    <Dialog aria-labelledby='form-dialog-title' open={open}>
      <DialogTitle id='form-dialog-title'>{content.title}</DialogTitle>

      {content.content}

      <DialogActions style={{ marginRight: '20px', marginBottom: '20px' }}>
        <Button
          color='secondary'
          onClick={closeMovieLookup}
        >
            Cancel
        </Button>
        <Button
          color='primary'
          disabled={!validateButton()}
          onClick={content.buttonAction}
          variant='raised'
        >
          {content.button}
        </Button>
      </DialogActions>
    </Dialog>
  )
}


MovieLookupDialog.propTypes = {
  closeMovieLookup: PropTypes.func.isRequired,
  mode: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired,
  selectedCopy: PropTypes.string.isRequired,
  selectedMovie: PropTypes.object.isRequired,
  setMode: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  mode: state.movieLookup.mode,
  open: state.movieLookup.open,
  selectedMovie: state.movieLookup.selectedMovie,
  selectedCopy: state.movieLookup.selectedCopy,
})


const actions = {
  ...movieLookupActions,
}

export default connect(mapStateToProps, actions)(MovieLookupDialog)
