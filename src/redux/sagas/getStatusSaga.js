import {
  call,
} from 'redux-saga/effects'
import { get } from './helpers/makeFetchCall'
import getServerURL from './helpers/getServerURL'

export function* getStatusSaga() {
  const url = `${getServerURL()}/status`

  const response = yield call(get, { url })

  console.log(response)
}
