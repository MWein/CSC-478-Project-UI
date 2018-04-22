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
    yield dispatch(returnActions.setOpenTransactions(response.payload.rows))
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
