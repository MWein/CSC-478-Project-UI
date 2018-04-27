import {
  call,
  put as dispatch,
  select,
  takeLatest,
} from 'redux-saga/effects'
import { actions as appActions } from '../actions/appActions'
import { formattedDateString } from '../dateFunctions'
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
    const responseWithSelection = response.payload.rows.map(transaction => ({
      ...transaction,
      selected: false,
      dueDate: formattedDateString(transaction.dueDate),
    }))

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
