import {
  call,
  put as dispatch,
  select,
  takeLatest,
} from 'redux-saga/effects'
import { actions as appActions } from '../actions/appActions'
import { actions as employeeActions } from '../actions/employeeActions'
import { getToken } from '../selectors'
import { post } from './helpers/makeFetchCall'


export function* getAllEmployeesSaga() {
  const url = 'http://localhost/allUsers'
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
    yield dispatch(employeeActions.setEmployeeList(response.payload.rows))
  }
}

export default function* () {
  yield takeLatest(
    [
      appActions.openEmployeePage().type,
    ],
    getAllEmployeesSaga
  )
}
