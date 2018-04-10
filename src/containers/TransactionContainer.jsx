import Button from 'material-ui/Button'
import CustomerLookupDialog from '../components/CustomerLookupDialog'
import Grid from 'material-ui/Grid'
import MovieLookupDialog from '../components/MovieLookupDialog'
import Paper from 'material-ui/Paper'
import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'
import { actions as customerLookupActions } from '../redux/actions/customerLookupActions'
import { actions as movieLookupActions } from '../redux/actions/movieLookupActions'
import { actions as transactionActions } from '../redux/actions/transactionActions'


const TransactionContainer = ({
  customer,
  openCustomerLookup,
  setSelectedCustomer,
  openMovieLookup,
  movieList,
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
              Copy: {movie.copyID}
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
      <CustomerLookupDialog />
      <MovieLookupDialog />

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
            onClick={() => openMovieLookup(hello => console.log('OPEN MOVIE LOOKUP TEST ', hello))}
            style={style.button}
            variant='raised'
          >
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


TransactionContainer.propTypes = {
  customer: PropTypes.object.isRequired,
  movieList: PropTypes.array.isRequired,
  openCustomerLookup: PropTypes.func.isRequired,
  openMovieLookup: PropTypes.func.isRequired,
  setSelectedCustomer: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  customer: state.transaction.customer,
  movieList: state.transaction.movieList,
})

const actions = {
  ...customerLookupActions,
  ...transactionActions,
  ...movieLookupActions,
}

export default connect(mapStateToProps, actions)(TransactionContainer)
