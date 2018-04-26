import Grid from 'material-ui/Grid'
import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'

const ReportsContainer = ({
  bestCustomers,
  bestMovies,
}) => {
  const tableHeaderText = text => {
    return (
      <div style={{ fontSize: '20px', fontWeight: 'bold' }}>
        {text}
      </div>
    )
  }

  const createCustomersTable = () => {
    const customerRows = bestCustomers.map(customer => (
      <tr key={customer.customerID}>
        <td>{customer.f_name}</td>
        <td>{customer.l_name}</td>
        <td>{customer.order_count}</td>
      </tr>
    ))

    return (
      <table border='0' width='100%'>
        <tbody>
          <tr>
            <td>{tableHeaderText('First Name')}</td>
            <td>{tableHeaderText('Last Name')}</td>
            <td>{tableHeaderText('Number of Orders')}</td>
          </tr>
          <tr />
          {customerRows}
        </tbody>
      </table>
    )
  }


  const createMoviesTable = () => {
    const movieRows = bestMovies.map(movie => (
      <tr key={movie.upc}>
        <td>{movie.title}</td>
        <td>{movie.upc}</td>
        <td>{movie.order_count}</td>
      </tr>
    ))

    return (
      <table border='0' width='100%'>
        <tbody>
          <tr>
            <td>{tableHeaderText('Title')}</td>
            <td>{tableHeaderText('UPC')}</td>
            <td>{tableHeaderText('Number of Orders')}</td>
          </tr>
          <tr />
          {movieRows}
        </tbody>
      </table>
    )
  }


  return (
    <div style={{ flex: '1', justifyContent: 'center', padding: '30px' }}>
      <Grid container>
        <Grid item xs={12}>
          <div style={{ fontSize: '25px' }}>
          Reports
          </div>
        </Grid>

        <Grid item xs={6}>
          <div style={{ textAlign: 'center', fontSize: '20px' }}>
          Best Customers
          </div>
          <br /><br />
          {createCustomersTable()}
        </Grid>

        <Grid item xs={6}>
          <div style={{ textAlign: 'center', fontSize: '20px' }}>
          Best Movies
          </div>
          <br /><br />
          {createMoviesTable()}
        </Grid>
      </Grid>
    </div>
  )
}


ReportsContainer.propTypes = {
  bestCustomers: PropTypes.array.isRequired,
  bestMovies: PropTypes.array.isRequired,
}

const mapStateToProps = state => ({
  bestCustomers: state.reports.bestCustomers,
  bestMovies: state.reports.bestMovies,
})

const actions = {
}

export default connect(mapStateToProps, actions)(ReportsContainer)
