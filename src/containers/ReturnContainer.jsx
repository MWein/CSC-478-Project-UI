import Button from 'material-ui/Button'
import Grid from 'material-ui/Grid'
import Paper from 'material-ui/Paper'
import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'


const ReturnContainer = ({
  openTransactions,
}) => {
  const displayTransactions = () => {
    if (openTransactions.length === 0) {
      return (
        <div style={{ flex: '1', textAlign: 'center', color: 'red' }}>
          No Open Transactions
        </div>
      )
    }

    const rows = openTransactions.map(transaction => (
      <Grid item key={`${transaction.customerID}`} xs={4}>
        <Paper style={{ width: '500px', padding: '30px' }}>
          <Grid container>

            <Grid item xs={12}>
              {transaction.f_name} {transaction.l_name}
            </Grid>

            <Grid item xs={6}>
              {transaction.title}
            </Grid>

            <Grid item xs={6}>
              Due: {transaction.dueDate}
            </Grid>

            <Grid item xs={6}>
              Phone: {transaction.phone}
            </Grid>

            <Grid item xs={6}>
              Email: {transaction.email}
            </Grid>

            <Grid item xs={12}>
              <div style={{ textAlign: 'right' }}>
                <Button
                  color='primary'
                  variant='raised'
                >
                  Return
                </Button>
              </div>
            </Grid>

          </Grid>
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
          <div style={{ fontSize: '25px' }}>
            Open Transactions<br /><br />
          </div>
        </Grid>
        <Grid item xs={6}>
          <div style={{ textAlign: 'right' }}>
            <Button
              color='primary'
              variant='raised'
            >
              Process Multiple Returns
            </Button>
          </div>
        </Grid>
      </Grid>

      <Grid container>
        {displayTransactions()}
      </Grid>
    </div>
  )
}


ReturnContainer.propTypes = {
  openTransactions: PropTypes.array.isRequired,
}

const mapStateToProps = state => ({
  openTransactions: state.returns.openTransactions,
})

const actions = {
}

export default connect(mapStateToProps, actions)(ReturnContainer)
