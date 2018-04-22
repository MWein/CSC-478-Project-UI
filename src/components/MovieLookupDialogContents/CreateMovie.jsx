import Button from 'material-ui/Button'
import {
  DialogContent,
} from 'material-ui/Dialog'
import Grid from 'material-ui/Grid'
import PropTypes from 'prop-types'
import React from 'react'
import TextField from 'material-ui/TextField'
import { connect } from 'react-redux'
import { actions as movieLookupActions } from '../../redux/actions/movieLookupActions'


const SelectMovieCopy = ({
  title,
  upc,
  setNewMovieTitle,
  setNewMovieUPC,
}) => {

  return (
    <div style={{ width: '500px' }}>
      <DialogContent>

        <div style={{ flex: '1', textAlign: 'center' }}>

          <Grid container>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label='Title - Required'
                onChange={event => setNewMovieTitle(event.target.value)}
                value={title}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label='UPC - Required'
                onChange={event => setNewMovieUPC(event.target.value)}
                value={upc}
              />
            </Grid>

          </Grid>

        </div>

      </DialogContent>
    </div>
  )
}


SelectMovieCopy.propTypes = {
  setNewMovieTitle: PropTypes.func.isRequired,
  setNewMovieUPC: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  upc: PropTypes.string.isRequired,
}

const mapStateToProps = state => ({
  title: state.movieLookup.newMovieTitle,
  upc: state.movieLookup.newMovieUPC,
})


const actions = {
  ...movieLookupActions,
}

export default connect(mapStateToProps, actions)(SelectMovieCopy)
