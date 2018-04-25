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
import { actions as reportsActions } from '../actions/reportsActions'

export function* getBestCustomersSaga() {
  const url = `${getServerURL()}/bestCustomers`
  const token = yield select(getToken)
  const body = {
    token,
  }

  const response = yield call(post, {
    url,
    body: JSON.stringify(body),
  })

  yield dispatch(reportsActions.setBestCustomers(response.payload))
}

export default function* () {
  yield takeLatest(
    [
      appActions.openReportsPage().type,
    ],
    getBestCustomersSaga
  )
}
