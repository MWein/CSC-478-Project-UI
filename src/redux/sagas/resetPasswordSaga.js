import {
  call,
  put as dispatch,
  select,
  takeLatest,
} from 'redux-saga/effects'
import {
  getEmployeeId,
  getEmployeePin,
  getToken,
} from '../selectors'
import { actions as editEmployeeActions } from '../actions/editEmployeeActions'
import { actions as errorMessageActions } from '../actions/errorMessageActions'
import getServerURL from './helpers/getServerURL'
import { post } from './helpers/makeFetchCall'

export function* resetPasswordSaga() {
  const url = `${getServerURL()}/adminSetPassword`

  const token = yield select(getToken)

  const id = yield select(getEmployeeId)
  const pin = yield select(getEmployeePin)

  const body = {
    token,
    id,
    pin,
  }

  const response = yield call(post, {
    url,
    body: JSON.stringify(body),
  })

  if (response.payload.error) {
    yield dispatch(errorMessageActions.displayError(response.payload.errorMsg))
  } else {
    yield dispatch(editEmployeeActions.closeResetPassword())
  }
}

export default function* () {
  yield takeLatest(
    [
      editEmployeeActions.resetPassword().type,
    ],
    resetPasswordSaga
  )
}
