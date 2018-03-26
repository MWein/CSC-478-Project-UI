import {
  call,
  put as dispatch,
  takeLatest,
} from 'redux-saga/effects'
import actions from '../actions'
import { get } from './helpers/makeFetchCall'

export function* apiHealthSaga() {
  const url = 'http://localhost:3000/v1/health'
  const response = yield call(get, { url })

  yield dispatch(actions.setAgencyHealth(response.error ? false : response.payload.agency))
  yield dispatch(actions.setDatabaseHealth(response.error ? false : response.payload.database))
  yield dispatch(actions.setPingHealth(response.error ? false : response.payload.ping))
  yield dispatch(actions.setPapiHealth(response.error ? false : response.payload.papi))
  yield dispatch(actions.setRulesHealth(response.error ? false : response.payload.rules))
}

export default function* () {
  yield takeLatest(
    [
      actions.setAgencyHealth().type,
      actions.setDatabaseHealth().type,
      actions.setPingHealth().type,
      actions.setPapiHealth().type,
      actions.setRulesHealth().type,
    ],
    apiHealthSaga
  )
}
