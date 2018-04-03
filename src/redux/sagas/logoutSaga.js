import {
  call,
  put as dispatch,
  select,
  takeLatest,
} from 'redux-saga/effects'
import { actions as appActions } from '../actions/appActions'
import { getToken } from '../selectors'
import { post } from './helpers/makeFetchCall'


export function* logoutSaga() {
  const url = 'http://csc478team301.uisad.uis.edu:8080/logout'

  const token = yield select(getToken)

  const body = {
    token,
  }

  yield call(post, {
    url,
    body: JSON.stringify(body),
  })

  yield dispatch(appActions.purge())
}

export default function* () {
  yield takeLatest(
    [
      appActions.logout().type,
    ],
    logoutSaga
  )
}