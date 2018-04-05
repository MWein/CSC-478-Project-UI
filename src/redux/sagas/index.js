import { call, fork } from 'redux-saga/effects'
import changePasswordSaga from './changePasswordSaga'
import createCustomerSaga from './createCustomerSaga'
import editCustomerSaga from './editCustomerSaga'
import getAllCustomersSaga from './getAllCustomersSaga'
import getAllEmployeesSaga from './getAllEmployeesSaga'
import getSecurityQuestionSaga from './getSecurityQuestionSaga'
import { getStatusSaga } from './getStatusSaga'
import loginSaga from './loginSaga'
import logoutSaga from './logoutSaga'


export default function* sagasMain() {
  yield call(getStatusSaga)

  yield fork(getAllEmployeesSaga)
  yield fork(getSecurityQuestionSaga)
  yield fork(loginSaga)
  yield fork(getAllCustomersSaga)
  yield fork(createCustomerSaga)
  yield fork(editCustomerSaga)
  yield fork(changePasswordSaga)
  yield fork(logoutSaga)
}
