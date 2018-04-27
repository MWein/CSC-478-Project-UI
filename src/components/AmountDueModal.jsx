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



const testValues = [
  {
    customerID: 'yyy',
    address: '',
    copyID: 'g',
    dueDate: 'April 25, 2018',
    email: 'mweinberg21@gmail.com',
    f_name: 'Mike',
    l_name: 'Weinberg',
    phone: '44444444',
    title: 'Lord of the Flies Ultra HD',
  },
  {
    customerID: 'yyy',
    address: '',
    copyID: 'g',
    dueDate: 'April 25, 2018',
    email: 'mweinberg21@gmail.com',
    f_name: 'Mike',
    l_name: 'Weinberg',
    phone: '44444444',
    title: 'Lord of the Flies Mega HD',
  },
  {
    customerID: 'fffff',
    address: '',
    copyID: 'g',
    dueDate: 'April 27, 2018',
    email: 'mweinberg21@gmail.com',
    f_name: 'Brad',
    l_name: 'Grimshaw',
    phone: '44444444',
    title: 'Lord of the Flies Quadruple HD',
  },
  {
    customerID: 'lllllllllll',
    address: '',
    copyID: 'g',
    dueDate: 'April 25, 2018',
    email: 'mweinberg21@gmail.com',
    f_name: 'Ray',
    l_name: 'Kraus',
    phone: '44444444',
    title: 'Lord of the Flies Ultra HD',
  },
  {
    customerID: 'lllllllllll',
    address: '',
    copyID: 'g',
    dueDate: 'April 25, 2018',
    email: 'mweinberg21@gmail.com',
    f_name: 'Ray',
    l_name: 'Kraus',
    phone: '44444444',
    title: 'Lord of the Rings',
  },
]


const AdminResetPasswordDialog = ({
  open,
  returnedTransactions,
  closeBalanceModal,
}) => {
  const transactionTableForCustomer = customer => {
    const rows = () => returnedTransactions.filter(transaction => transaction.customerID === customer.customerID)
      .map(transaction => (
        <div key={transaction.copyID}>
          <td>{transaction.title}</td>
          <td>{transaction.copyID}</td>
          <td>{transaction.dueDate}</td>
          <td>$9.00</td>
        </div>
      ))

    return (
      <div>
        {customer.f_name} {customer.l_name}

        <table border='1'>
          <tbody>
            {rows()}
          </tbody>
        </table>
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
    <Dialog aria-labelledby='form-dialog-title' open={open}>
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
  //open: state.returns.balanceModalOpen,
  open: true,
  //returnedTransactions: state.returns.returnedTransactions,
  returnedTransactions: testValues,
})


const actions = {
  ...returnActions,
}

export default connect(mapStateToProps, actions)(AdminResetPasswordDialog)
