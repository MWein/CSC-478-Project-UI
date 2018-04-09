import Button from 'material-ui/Button'
import ForgotPasswordDialog from '../components/ForgotPasswordDialog'
import Grid from 'material-ui/Grid'
import Paper from 'material-ui/Paper'
import PropTypes from 'prop-types'
import React from 'react'
import TextField from 'material-ui/TextField'
import { connect } from 'react-redux'

const TransactionContainer = () => {
  const paperPadding = '30px'
  const style = {
    paper: {
      width: '300px',
      paddingTop: paperPadding,
      paddingBottom: paperPadding,
      paddingLeft: paperPadding,
      paddingRight: paperPadding,
    },
    textField: {
      width: '100%',
    },
    title: {
      fontSize: 20,
    },
  }


  const movieList = [
    {
      title: 'Star Wars Episode 52',
      copyID: '123456',
    },
    {
      title: 'Star Wars Episode 44',
      copyID: '123456',
    },
    {
      title: 'Fast and Furious 39',
      copyID: '123456',
    },
    {
      title: 'Another Copy of Star Wars Episode 52',
      copyID: '123456',
    },
    {
      title: 'Another Copy of Star Wars Episode 52',
      copyID: '123456',
    },
  ]


  const displayMovieList = () => {
    const rows = movieList.map(movie => (
      <Grid item key={`${movie.title}${movie.copyID}`} xs={3}>
        <Paper style={{ padding: '20px', fontSize: '20px' }}>
          <Grid container>
            <Grid item xs={12}>
              {movie.title}
            </Grid>

            <Grid item xs={12}>
              {movie.copyID}
            </Grid>
          </Grid>

          <div style={{ textAlign: 'right' }}>
            <Button
              color='secondary'
              variant='raised'
            >
                Remove
            </Button>

          </div>
        </Paper>
      </Grid>
    ))

    return (
      <Grid container>
        {rows}
      </Grid>
    )
  }


  return (
    <div style={{ flex: '1', justifyContent: 'center', padding: '30px' }}>

      <Grid container>
        <Grid item xs={6}>
          <div style={{ flex: '1', fontSize: '25px' }}>
            Total: $27.62
          </div>
        </Grid>

        <Grid item xs={6}>
          <div style={{ textAlign: 'right' }}>
            <Button
              color='primary'
              variant='raised'
            >
              Finish Transaction
            </Button>
          </div>
        </Grid>


        <Grid item xs={12}>
          <br />
        </Grid>


        <Grid item xs={6}>
          <Button variant='raised' color='secondary' style={{ width: '100%', height: '50px' }}>
            Select Customer
          </Button>
        </Grid>

        <Grid item xs={6}>
          <Button variant='raised' color='secondary' style={{ width: '100%', height: '50px' }}>
            Add Movie
          </Button>
        </Grid>

        <Grid item xs={12}>
          <br />
        </Grid>

        {displayMovieList()}
      </Grid>

    </div>
  )
}

// Don't worry about the things below this line, for now


TransactionContainer.propTypes = {
}

const mapStateToProps = state => ({
})

const actions = {
}

export default connect(mapStateToProps, actions)(TransactionContainer)
