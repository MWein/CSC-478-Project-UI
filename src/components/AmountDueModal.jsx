import Dialog, {
  DialogActions,
  DialogContent,
  DialogTitle,
} from 'material-ui/Dialog'
import {
  totalCost,
  isOverdue,
} from '../redux/dateFunctions'
import Button from 'material-ui/Button'
import Divider from 'material-ui/Divider'
import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'
import { actions as returnActions } from '../redux/actions/returnActions'
import { uniqBy } from 'lodash'


const AdminResetPasswordDialog = ({
  open,
  returnedTransactions,
  closeBalanceModal,
}) => {
  const transactionsWithCost = returnedTransactions.map(transaction => ({
    ...transaction,
    amountDue: totalCost(transaction.dueDate),
  }))

  const colorByDueDate = date => isOverdue(date) ? 'red' : 'black'

  const transactionTableForCustomer = customer => {
    const thisCustomerTransactions = transactionsWithCost.filter(transaction => transaction.customerID === customer.customerID)

    const rows = () => thisCustomerTransactions.map(transaction => (
      <tr key={transaction.copyID}>
        <td width='400px'>{transaction.title}</td>
        <td style={{ textAlign: 'right', color: colorByDueDate(transaction.dueDate) }} width='200px'>{transaction.dueDate}</td>
        <td style={{ textAlign: 'right' }} width='200px'>${transaction.amountDue}.00</td>
      </tr>
    ))

    return (
      <div>
        <div style={{ fontSize: '20px', fontWeight: 'bold' }}>
          {customer.f_name} {customer.l_name}
        </div>

        <br />

        <table width='100%'>
          <tbody>
            {rows()}
            <tr><td colSpan='3' style={{ textAlign: 'right', fontSize: '20px', fontWeight: 'bold' }}>Total: ${thisCustomerTransactions.reduce((acc, transaction) => transaction.amountDue + acc, 0)}.00</td></tr>
          </tbody>
        </table>
        <br />
      </div>
    )
  }


  const tables = uniqBy(returnedTransactions.map(transaction => ({
    customerID: transaction.customerID,
    f_name: transaction.f_name,
    l_name: transaction.l_name,
  })), 'customerID')
    .map(customer => transactionTableForCustomer(customer))


  return (
    <Dialog aria-labelledby='form-dialog-title' maxWidth='lg' open={open}>
      <DialogTitle id='form-dialog-title'>Balances Due - ${transactionsWithCost.reduce((acc, transaction) => transaction.amountDue + acc, 0)}.00</DialogTitle>
      <Divider /><br />
      <DialogContent>
        {tables}
      </DialogContent>
      <DialogActions style={{ marginRight: '20px', marginBottom: '20px' }}>
        <Button
          color='primary'
          onClick={closeBalanceModal}
          variant='raised'
        >
          Done
        </Button>
      </DialogActions>
    </Dialog>
  )
}


AdminResetPasswordDialog.propTypes = {
  closeBalanceModal: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  returnedTransactions: PropTypes.array.isRequired,
}

const mapStateToProps = state => ({
  open: state.returns.balanceModalOpen,
  returnedTransactions: state.returns.returnedTransactions,
})


const actions = {
  ...returnActions,
}

export default connect(mapStateToProps, actions)(AdminResetPasswordDialog)
