import Button from 'material-ui/Button'
import Checkbox from 'material-ui/Checkbox'
import { FormControlLabel } from 'material-ui/Form'
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


    const dueDateColor = date => new Date() > new Date(date) ? 'red' : 'black'


    const rows = openTransactions.map(transaction => (
      <Grid item key={`${transaction.customerID}`} xs={4}>
        <Paper style={{ padding: '20px' }}>
          <Grid container>

            <Grid item xs={12}>
              <div style={{ fontSize: '20px' }}>
                {transaction.f_name} {transaction.l_name}
              </div>
            </Grid>

            <Grid item xs={6}>
              {transaction.title}
            </Grid>

            <Grid item xs={6}>
              Due: <span style={{ color: dueDateColor(transaction.dueDate) }}>{transaction.dueDate}</span>
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
        <Grid item xs={6}>
          <div style={{ fontSize: '25px' }}>
            Open Transactions
          </div>
        </Grid>

        <Grid item xs={6}>
          <div style={{ justifyContent: 'right', textAlign: 'right' }}>
            <FormControlLabel
              control={
                <Checkbox />
              }
              label='Show Overdue Only'
            />
          </div>
        </Grid>

        {rows}
      </Grid>
    )
  }

  return (
    <div style={{ flex: '1', justifyContent: 'center', padding: '50px' }}>
      {displayTransactions()}
    </div>
  )
}


ReturnContainer.propTypes = {
  openTransactions: PropTypes.array.isRequired,
}

const mapStateToProps = state => ({
  //openTransactions: state.returns.openTransactions,
  openTransactions: [
    {
      customerID: '7777888889999',
      f_name: 'Jerry',
      l_name: 'Jerbear',
      title: 'God hates you',
      dueDate: new Date('1 April 2018').toDateString(),
      phone: '1234567890',
      email: 'guy@pornhub.com',
    },
    {
      customerID: '123',
      f_name: 'Jake',
      l_name: 'Rawls',
      title: 'Battle LA (sucked)',
      dueDate: new Date().toDateString(),
      phone: '1234567890',
      email: 'iworkat@google.com',
    },
    {
      customerID: '1234',
      f_name: 'Jake',
      l_name: 'Rawls',
      title: 'Some title',
      dueDate: new Date('19 April 2018').toDateString(),
      phone: '1234567890',
      email: 'iworkat@google.com',
    },
    {
      customerID: '1235',
      f_name: 'Jake',
      l_name: 'Rawls',
      title: 'Battle LA (sucked)',
      dueDate: new Date().toDateString(),
      phone: '1234567890',
      email: 'iworkat@google.com',
    },
    {
      customerID: '1236',
      f_name: 'Jake',
      l_name: 'Rawls',
      title: 'Some title',
      dueDate: new Date().toDateString(),
      phone: '1234567890',
      email: 'iworkat@google.com',
    },
  ],
})

const actions = {
}

export default connect(mapStateToProps, actions)(ReturnContainer)
