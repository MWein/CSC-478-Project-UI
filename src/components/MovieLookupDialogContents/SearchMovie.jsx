import Button from 'material-ui/Button'
import {
  DialogContent,
} from 'material-ui/Dialog'
import PropTypes from 'prop-types'
import React from 'react'
import TextField from 'material-ui/TextField'
import { connect } from 'react-redux'
import { actions as movieLookupActions } from '../../redux/actions/movieLookupActions'


const SearchMovieDialog = ({
  upc,
  copyID,
  selectedMovie,
  moviesList,
  setUPC,
  setCopyID,
  setSelectedMovie,
  setCopiesList,
  getMovie,
}) => {
  const selectMovie = movie => {
    setSelectedMovie(movie)
    setCopiesList(movie.copies)
  }

  const movieListTable = () => {
    const movieTable = moviesList.map(movie => (
      <Button
        color='primary'
        key={movie.upc}
        onClick={() => selectMovie(movie)}
        style={{ width: '100%' }}
        variant={selectedMovie === movie ? 'raised' : 'flat'}
      >
        {movie.title}
      </Button>
    ))

    return movieTable.length > 0 ? (
      <div>
        {movieTable}
        <br /><br />
      </div>
    ) : null
  }


  return (
    <div>
      <DialogContent>

        <TextField
          label='UPC'
          onChange={event => setUPC(event.target.value)}
          value={upc}
        />

        &nbsp;&nbsp;&nbsp;
        OR
        &nbsp;&nbsp;&nbsp;&nbsp;

        <TextField
          label='Copy ID'
          onChange={event => setCopyID(event.target.value)}
          value={copyID}
        />

        &nbsp;&nbsp;

        <Button
          disabled={upc === '' && copyID === '' || upc === '0'}
          onClick={getMovie}
          variant='raised'
        >
          Search
        </Button>

        <br /><br />
        {movieListTable()}

      </DialogContent>
    </div>
  )
}


SearchMovieDialog.propTypes = {
  copyID: PropTypes.string.isRequired,
  getMovie: PropTypes.func.isRequired,
  moviesList: PropTypes.array.isRequired,
  selectedMovie: PropTypes.object.isRequired,
  setCopiesList: PropTypes.func.isRequired,
  setCopyID: PropTypes.func.isRequired,
  setSelectedMovie: PropTypes.func.isRequired,
  setUPC: PropTypes.func.isRequired,
  upc: PropTypes.string.isRequired,
}

const mapStateToProps = state => ({
  upc: state.movieLookup.upc,
  copyID: state.movieLookup.copyID,
  selectedMovie: state.movieLookup.selectedMovie,
  moviesList: state.movieLookup.movieList,
})


const actions = {
  ...movieLookupActions,
}

export default connect(mapStateToProps, actions)(SearchMovieDialog)
