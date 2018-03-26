import { call, fork } from 'redux-saga/effects'
import { getStatusSaga } from './getStatusSaga'

export default function* sagasMain() {
  // yield fork(<saga>)
  yield call(getStatusSaga)
}
