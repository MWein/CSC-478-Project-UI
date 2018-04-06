import {
  call,
} from 'redux-saga/effects'
import { get } from './helpers/makeFetchCall'
import getServerURL from './helpers/getServerURL'
import os from 'os'

export function* getStatusSaga() {
  const url = `${getServerURL()}/status`

  const response = yield call(get, { url })

  if (os.hostname() === 'localhost') {
    console.log(response)
  }
}
