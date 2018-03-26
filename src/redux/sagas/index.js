import { call, fork } from 'redux-saga/effects'
import getSecurityQuestionSaga from './getSecurityQuestionSaga'
import { getStatusSaga } from './getStatusSaga'

export default function* sagasMain() {
  yield call(getStatusSaga)

  yield fork(getSecurityQuestionSaga)
}
