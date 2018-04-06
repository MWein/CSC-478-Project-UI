import {
  call,
  put as dispatch,
  select,
  takeLatest,
} from 'redux-saga/effects'
import { actions as customerLookupActions } from '../actions/customerLookupActions'
import { getToken } from '../selectors'
import { post } from './helpers/makeFetchCall'

export function* getAllCustomersSaga() {
  const url = 'http://localhost/allCustomers'
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
    yield dispatch(customerLookupActions.setCustomers(response.payload.rows))
  }
}

export default function* () {
  yield takeLatest(
    [
      customerLookupActions.getAllCustomers().type,
    ],
    getAllCustomersSaga
  )
}
