import Button from 'material-ui/Button'
import CustomerLookupDialog from '../components/CustomerLookupDialog'
import Grid from 'material-ui/Grid'
import MovieLookupDialog from '../components/MovieLookupDialog'
import Paper from 'material-ui/Paper'
import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'
import { actions as customerLookupActions } from '../redux/actions/customerLookupActions'
import { actions as errorActions } from '../redux/actions/errorMessageActions'
import { actions as movieLookupActions } from '../redux/actions/movieLookupActions'
import { actions as transactionActions } from '../redux/actions/transactionActions'


const TransactionContainer = ({
  customer,
  openCustomerLookup,
  setSelectedCustomer,
  openMovieLookup,
  movieList,
  openTransactions,
  setMovieList,
  createTransaction,
  displayError,
}) => {
  const style = {
    paper: {
      padding: '20px',
      fontSize: '20px',
    },
    button: {
      width: '100%',
      height: '50px',
    },
  }

  const finishTransactionButtonEnabled = () => {
    if (movieList.length === 0) {
      return false
    }
    if (Object.keys(customer).length === 0) {
      return false
    }

    return true
  }


  const addMovieToList = movie => {
    if (movieList.map(movie => movie.copyID).includes(movie.copyID)) {
      displayError('Movie Already Selected')

      return
    }

    if (openTransactions.map(movie => movie.copyID).includes(movie.copyID)) {
      displayError('Movie Already Checked Out')

      return
    }

    setMovieList([
      ...movieList,
      movie,
    ])
  }

  const removeMovie = doomedMovie => {
    setMovieList(movieList.filter(movie => movie !== doomedMovie))
  }

  const displayMovieList = () => {
    if (movieList.length === 0) {
      return (
        <div style={{ flex: '1', textAlign: 'center', color: 'red' }}>
          No Movies Selected
        </div>
      )
    }

    const rows = movieList.map(movie => (
      <Grid item key={`${movie.title}${movie.copyID}`} xs={3}>
        <Paper style={style.paper}>
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
              onClick={() => removeMovie(movie)}
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
      <CustomerLookupDialog />
      <MovieLookupDialog />

      <Grid container>
        <Grid item xs={8}>
          <div style={{ flex: '1', fontSize: '25px' }}>
            Total: {`$${movieList.length * 3}.00`}
          </div>
        </Grid>

        <Grid item xs={4}>
          <div style={{ textAlign: 'right' }}>
            <Button
              color='secondary'
              variant='raised'
            >
              Discard
            </Button>
            &nbsp;&nbsp;&nbsp;
            <Button
              color='primary'
              disabled={!finishTransactionButtonEnabled()}
              onClick={createTransaction}
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
          <Button
            color={Object.keys(customer).length > 0 ? 'primary' : 'secondary'}
            onClick={() => openCustomerLookup(setSelectedCustomer)}
            style={style.button}
            variant='raised'
          >
            {Object.keys(customer).length > 0 ? `${customer.f_name} ${customer.l_name}` : 'Select Customer'}
          </Button>
        </Grid>

        <Grid item xs={6}>
          <Button
            color={movieList.length === 0 ? 'secondary' : 'primary'}
            onClick={() => openMovieLookup(addMovieToList)}
            style={style.button}
            variant='raised'
          >
            Select Movie
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


TransactionContainer.propTypes = {
  createTransaction: PropTypes.func.isRequired,
  customer: PropTypes.object.isRequired,
  displayError: PropTypes.func.isRequired,
  movieList: PropTypes.array.isRequired,
  openCustomerLookup: PropTypes.func.isRequired,
  openMovieLookup: PropTypes.func.isRequired,
  openTransactions: PropTypes.array.isRequired,
  setMovieList: PropTypes.func.isRequired,
  setSelectedCustomer: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  customer: state.transaction.customer,
  movieList: state.transaction.movieList,
  openTransactions: state.returns.openTransactions,
})

const actions = {
  ...customerLookupActions,
  ...transactionActions,
  ...movieLookupActions,
  ...errorActions,
}

export default connect(mapStateToProps, actions)(TransactionContainer)
