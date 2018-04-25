import { call, fork } from 'redux-saga/effects'
import addMovieCopySaga from './addMovieCopySaga'
import changePasswordSaga from './changePasswordSaga'
import createCustomerSaga from './createCustomerSaga'
import createEmployeeSaga from './createEmployeeSaga'
import createTransactionSaga from './createTransactionSaga'
import editCustomerSaga from './editCustomerSaga'
import editEmployeeSaga from './editEmployeeSaga'
import getAllCustomersSaga from './getAllCustomersSaga'
import getAllEmployeesSaga from './getAllEmployeesSaga'
import getBestCustomersSaga from './getBestCustomersSaga'
import getMovieSaga from './getMovie'
import getOpenTransactionsSaga from './getOpenTransactionsSaga'
import getSecurityQuestionSaga from './getSecurityQuestionSaga'
import { getStatusSaga } from './getStatusSaga'
import loginSaga from './loginSaga'
import logoutSaga from './logoutSaga'
import resetPasswordSaga from './resetPasswordSaga'
import setSecurityQuestionSaga from './setSecurityQuestionSaga'


export default function* sagasMain() {
  yield call(getStatusSaga)

  yield fork(createEmployeeSaga)
  yield fork(editEmployeeSaga)
  yield fork(getAllEmployeesSaga)
  yield fork(getSecurityQuestionSaga)
  yield fork(loginSaga)
  yield fork(getAllCustomersSaga)
  yield fork(createCustomerSaga)
  yield fork(editCustomerSaga)
  yield fork(changePasswordSaga)
  yield fork(logoutSaga)
  yield fork(resetPasswordSaga)
  yield fork(setSecurityQuestionSaga)
  yield fork(getMovieSaga)
  yield fork(addMovieCopySaga)
  yield fork(createTransactionSaga)
  yield fork(getOpenTransactionsSaga)
  yield fork(getBestCustomersSaga)
}
