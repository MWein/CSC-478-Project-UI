import createActions from './helpers/createActions'

export const {
  constants,
  actions,
} = createActions('return', {
  setOpenTransactions: 'SET_OPEN_TRANSACTIONS',
  setOverdueOnly: 'SET_OVERDUE_ONLY',

  selectCopyID: 'SELECT_COPY_ID',
  deselectCopyID: 'DESELECT_COPY_ID',

  setReturnedTransactions: 'SET_RETURNED_TRANSACTIONS',
  openBalanceModal: 'OPEN_BALANCE_MODAL',
  closeBalanceModal: 'CLOSE_BALANCE_MODAL',

  processReturns: 'PROCESS_RETURNS',
})
