import {
  call,
  put as dispatch,
  select,
  takeLatest,
} from 'redux-saga/effects'
import { actions as appActions } from '../actions/appActions'
import { getToken } from '../selectors'
import { actions as loginActions } from '../actions/loginActions'
import { actions as navBarActions } from '../actions/navBarActions'
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

  yield dispatch(appActions.setPage(''))
  yield dispatch(navBarActions.setNavEnabled(false))
  yield dispatch(appActions.setToken(''))
  yield dispatch(appActions.setRole(''))

  yield dispatch(loginActions.setUsername(''))
  yield dispatch(loginActions.setPassword(''))
}

export default function* () {
  yield takeLatest(
    [
      loginActions.logout().type,
    ],
    logoutSaga
  )
}
