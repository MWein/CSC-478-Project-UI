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


  const movieList = [
    {
      title: 'Star Wars Episode 52',
      copyID: '123456',
    },
    {
      title: 'Star Wars Episode 44',
      copyID: '1234567',
    },
    {
      title: 'Fast and Furious 39',
      copyID: '1234568',
    },
    {
      title: 'Another Copy of Star Wars Episode 52',
      copyID: '1234569',
    },
    {
      title: 'Another Copy of Star Wars Episode 52',
      copyID: '12345610',
    },
  ]


  const displayMovieList = () => {
    const rows = movieList.map(movie => (
      <Grid item key={`${movie.title}${movie.copyID}`} xs={3}>

        <MovieLookupDialog />

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
            color='secondary'
            onClick={() => openMovieLookup(() => console.log('OPEN MOVIE LOOKUP TEST'))}
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
  openCustomerLookup: PropTypes.func.isRequired,
  openMovieLookup: PropTypes.func.isRequired,
  setSelectedCustomer: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  customer: state.transaction.customer,
})

const actions = {
  ...customerLookupActions,
  ...transactionActions,
  ...movieLookupActions,
}

export default connect(mapStateToProps, actions)(TransactionContainer)
