import {
  call,
  //put as dispatch,
} from 'redux-saga/effects'
//import { actions as appActions } from '../actions/appActions'
import { get } from './helpers/makeFetchCall'

export function* getStatusSaga() {
  const url = 'http://csc478team301.uisad.uis.edu:8080/status'

  const response = yield call(get, { url })

  console.log(response)
}
