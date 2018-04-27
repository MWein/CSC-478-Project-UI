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
import getServerURL from './helpers/getServerURL'
import { post } from './helpers/makeFetchCall'
import { actions as returnActions } from '../actions/returnActions'


export function* processReturnsSaga() {
  const url = `${getServerURL()}/returnMovie`
  const token = yield select(getToken)
  const transactions = yield select(getOpenTransactions)
  const copyIDs = transactions.reduce((acc, transaction) => transaction.selected ? [ ...acc, transaction.copyID ] : acc, [])
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
    const responseWithSelection = response.payload.map(transaction => {
      const dueDate = new Date(transaction.dueDate)

      const month = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ][dueDate.getMonth()]
      const dateString = `${month} ${dueDate.getDate()}, ${dueDate.getFullYear()}`

      return {
        ...transaction,
        selected: false,
        dueDate: dateString,
      }
    })

    yield dispatch(returnActions.setOpenTransactions(responseWithSelection))
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
