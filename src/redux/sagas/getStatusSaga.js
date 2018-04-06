import {
  call,
} from 'redux-saga/effects'
import { get } from './helpers/makeFetchCall'

export function* getStatusSaga() {
  const url = 'http://localhost/status'

  const response = yield call(get, { url })

  console.log(response)
}
