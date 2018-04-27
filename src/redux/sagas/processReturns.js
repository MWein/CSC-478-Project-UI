import {
  call,
  put as dispatch,
  select,
  takeLatest,
} from 'redux-saga/effects'
import {
  getOpenTransactions,
  getToken,
} from '../selectors'
import { formattedDateString } from '../dateFunctions'
import getServerURL from './helpers/getServerURL'
import { post } from './helpers/makeFetchCall'
import { actions as returnActions } from '../actions/returnActions'


export function* processReturnsSaga() {
  const url = `${getServerURL()}/returnMovie`
  const token = yield select(getToken)
  const transactions = yield select(getOpenTransactions)
  const returnedTransactions = transactions.filter(transaction => transaction.selected)
  const copyIDs = returnedTransactions.map(transaction => transaction.copyID)
  const body = {
    token,
    copyIDs,
  }

  const response = yield call(post, {
    url,
    body: JSON.stringify(body),
  })

  if (response.payload.error) {
    console.log('Error ', response.payload.errorMsg)
  } else {
    const responseWithSelection = response.payload.map(transaction => ({
      ...transaction,
      selected: false,
      dueDate: formattedDateString(transaction.dueDate),
    }))

    yield dispatch(returnActions.setOpenTransactions(responseWithSelection))
    yield dispatch(returnActions.setReturnedTransactions(returnedTransactions))
    yield dispatch(returnActions.openBalanceModal())
  }
}

export default function* () {
  yield takeLatest(
    [
      returnActions.processReturns().type,
    ],
    processReturnsSaga
  )
}
