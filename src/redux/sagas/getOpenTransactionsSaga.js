import {
  call,
  put as dispatch,
  select,
  takeLatest,
} from 'redux-saga/effects'
import { actions as appActions } from '../actions/appActions'
import getServerURL from './helpers/getServerURL'
import { getToken } from '../selectors'
import { post } from './helpers/makeFetchCall'
import { actions as returnActions } from '../actions/returnActions'


export function* getOpenTransactionsSaga() {
  const url = `${getServerURL()}/openTransactions`
  const token = yield select(getToken)
  const body = {
    token,
  }

  const response = yield call(post, {
    url,
    body: JSON.stringify(body),
  })

  if (response.payload.error) {
    console.log('Error ', response.payload.errorMsg)
  } else {
    const responseWithSelection = response.payload.rows.map(transaction => {
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
      appActions.openReturnPage().type,
      appActions.openTransactionPage().type,
    ],
    getOpenTransactionsSaga
  )
}
