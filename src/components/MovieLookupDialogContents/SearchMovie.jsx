import Button from 'material-ui/Button'
import {
  DialogContent,
} from 'material-ui/Dialog'
import PropTypes from 'prop-types'
import React from 'react'
import TextField from 'material-ui/TextField'
import { connect } from 'react-redux'
import { actions as movieLookupActions } from '../../redux/actions/movieLookupActions'


const moviesList = [
  {
    title: 'Battle of Whatever',
    upc: '123456',
  },
  {
    title: 'Star Wars',
    upc: '987654321',
  },
]


const SearchMovieDialog = ({
  upc,
  copyID,
  selectedMovie,
  setUPC,
  setCopyID,
  setSelectedMovie,
}) => {
  const movieListTable = () => {
    const movieTable = moviesList.map(movie => (
      <Button
        color='primary'
        key={movie.upc}
        onClick={() => setSelectedMovie(movie)}
        style={{ width: '100%' }}
        variant={selectedMovie === movie ? 'raised' : 'flat'}
      >
        {movie.title}
      </Button>
    ))

    const addNewMovieButton = () => (
      <Button variant='raised'>
        Add New Movie
      </Button>
    )

    return movieTable.length > 0 ? (
      <div>
        {movieTable}
        <br /><br />
        {/*addNewMovieButton()*/}
      </div>
    ) :
      (
        <div>
          {notFound ? (<div><div style={{ color: 'red' }}>Movie Not Found</div><br /></div>) : null}
          {/*addNewMovieButton()*/}
        </div>
      )
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

        <Button variant='raised'>
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
  selectedMovie: PropTypes.object.isRequired,
  setCopyID: PropTypes.func.isRequired,
  setSelectedMovie: PropTypes.func.isRequired,
  setUPC: PropTypes.func.isRequired,
  upc: PropTypes.string.isRequired,
}

const mapStateToProps = state => ({
  upc: state.movieLookup.upc,
  copyID: state.movieLookup.copyID,
  selectedMovie: state.movieLookup.selectedMovie,
})


const actions = {
  ...movieLookupActions,
}

export default connect(mapStateToProps, actions)(SearchMovieDialog)
