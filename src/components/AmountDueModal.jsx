import Dialog, {
  DialogActions,
  DialogContent,
  DialogTitle,
} from 'material-ui/Dialog'
import Button from 'material-ui/Button'
import Grid from 'material-ui/Grid'
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
  const transactionTableForCustomer = customer => {
    const rows = () => returnedTransactions.filter(transaction => transaction.customerID === customer.customerID)
      .map(transaction => (
        <div key={transaction.copyID}>
          <td width='400px'>{transaction.title}</td>
          <td width='150px'>{transaction.copyID}</td>
          <td style={{ textAlign: 'right' }} width='200px'>{transaction.dueDate}</td>
          <td style={{ textAlign: 'right' }} width='200px'>$9.00</td>
        </div>
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

            <tr>
              <td style={{ textAlign: 'right', fontSize: '20px', fontWeight: 'bold' }}>Total: $40.00</td>
            </tr>
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
      <DialogTitle id='form-dialog-title'>Balances Due</DialogTitle>

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
  //open: true,
  returnedTransactions: state.returns.returnedTransactions,
  //returnedTransactions: testValues,
})


const actions = {
  ...returnActions,
}

export default connect(mapStateToProps, actions)(AdminResetPasswordDialog)
