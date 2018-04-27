import Button from 'material-ui/Button'
import Checkbox from 'material-ui/Checkbox'
import { FormControlLabel } from 'material-ui/Form'
import Grid from 'material-ui/Grid'
import Paper from 'material-ui/Paper'
import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'
import { actions as returnActions } from '../redux/actions/returnActions'


const ReturnContainer = ({
  openTransactions,
  overdueOnly,
  setOverdueOnly,
  selectCopyID,
  deselectCopyID,
  processReturns,
}) => {
  const isOverdue = date => {
    const today = new Date()
    const dueDate = new Date(date)

    dueDate.setHours(23, 59, 59)

    return today > dueDate
  }

  const selectionButton = transaction => (
    <Button
      color={transaction.selected ? 'secondary' : 'primary'}
      onClick={transaction.selected ? () => deselectCopyID(transaction.copyID) : () => selectCopyID(transaction.copyID)}
      variant='raised'
    >
      {transaction.selected ? 'Deselect' : 'Select'}
    </Button>
  )

  const rows = openTransactions.filter(transaction => !overdueOnly || isOverdue(transaction.dueDate))
    .map(transaction => (
      <Grid item key={`${transaction.customerID}${transaction.copyID}`} xs={4}>
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
                Due: <span style={{ color: isOverdue(transaction.dueDate) ? 'red' : 'black' }}>{transaction.dueDate}</span>
            </Grid>

            <Grid item xs={6}>
                Phone: {transaction.phone}
            </Grid>

            <Grid item xs={6}>
                Email: {transaction.email}
            </Grid>

            <Grid item xs={12}>
              <div style={{ textAlign: 'right' }}>
                {selectionButton(transaction)}
              </div>
            </Grid>

          </Grid>
        </Paper>
      </Grid>
    ))

  return (
    <div style={{ flex: '1', justifyContent: 'center', padding: '30px' }}>
      <Grid container>
        <Grid item xs={4}>
          <div style={{ fontSize: '25px' }}>
            Open Transactions
          </div>
        </Grid>

        <Grid item xs={4}>
          <div style={{ textAlign: 'center' }}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={overdueOnly}
                  onChange={event => setOverdueOnly(event.target.checked)}
                />
              }
              label='Show Overdue Only'
            />
          </div>
        </Grid>

        <Grid item xs={4}>
          <div style={{ justifyContent: 'right', textAlign: 'right' }}>
            <Button
              color='primary'
              disabled={openTransactions.reduce((acc, transaction) => transaction.selected ? acc + 1 : acc, 0) === 0}
              onClick={processReturns}
              variant='raised'
            >
              Process Selected Returns
            </Button>
          </div>
        </Grid>

        {rows}
      </Grid>
    </div>
  )
}


ReturnContainer.propTypes = {
  deselectCopyID: PropTypes.func.isRequired,
  openTransactions: PropTypes.array.isRequired,
  overdueOnly: PropTypes.bool.isRequired,
  processReturns: PropTypes.func.isRequired,
  selectCopyID: PropTypes.func.isRequired,
  setOverdueOnly: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  overdueOnly: state.returns.overdueOnly,
  openTransactions: state.returns.openTransactions,
})

const actions = {
  ...returnActions,
}

export default connect(mapStateToProps, actions)(ReturnContainer)
