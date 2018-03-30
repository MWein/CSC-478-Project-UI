import { call, fork } from 'redux-saga/effects'
import createCustomerSaga from './createCustomerSaga'
import editCustomerSaga from './editCustomerSaga'
import getAllCustomersSaga from './getAllCustomersSaga'
import getSecurityQuestionSaga from './getSecurityQuestionSaga'
import { getStatusSaga } from './getStatusSaga'
import loginSaga from './loginSaga'

export default function* sagasMain() {
  yield call(getStatusSaga)

  yield fork(getSecurityQuestionSaga)
  yield fork(loginSaga)
  yield fork(getAllCustomersSaga)
  yield fork(createCustomerSaga)
  yield fork(editCustomerSaga)
}
