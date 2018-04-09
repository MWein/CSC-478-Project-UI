import Button from 'material-ui/Button'
import {
  DialogContent,
} from 'material-ui/Dialog'
import PropTypes from 'prop-types'
import React from 'react'
import TextField from 'material-ui/TextField'
import { connect } from 'react-redux'


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


const SearchMovieDialog = () => {
  const movieListTable = () => {
    const movieTable = moviesList.map(movie => (
      <Button
        color='primary'
        key={movie.upc}
        style={{ width: '100%' }}
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
        {addNewMovieButton()}
      </div>
    ) :
      (
        <div>
          {notFound ? (<div><div style={{ color: 'red' }}>Movie Not Found</div><br /></div>) : null}
          {addNewMovieButton()}
        </div>
      )
  }


  return (
    <div>
      <DialogContent>

        <TextField
          label='UPC'
        />

          &nbsp;&nbsp;&nbsp;
          OR
          &nbsp;&nbsp;&nbsp;&nbsp;

        <TextField
          label='Copy ID'
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
}

const mapStateToProps = state => ({
})


const actions = {
}

export default connect(mapStateToProps, actions)(SearchMovieDialog)
