import {
  call,
  put as dispatch,
  select,
  takeLatest,
} from 'redux-saga/effects'
import { getPassword, getSecAnswer, getUsername } from '../selectors'
import { actions as loginActions } from '../actions/loginActions'
import { post } from './helpers/makeFetchCall'

export function* loginSaga() {
  const url = 'http://csc478team301.uisad.uis.edu:8080/login'

  const id = yield select(getUsername)
  const pin = yield select(getPassword)
  const answer = yield select(getSecAnswer)

  const body = {
    id,
    pin,
    answer,
  }

  const response = yield call(post, {
    url,
    body: JSON.stringify(body),
  })

  if (response.payload.error) {
    console.log(response.payload)
  } else {
    console.log(response.payload)
  }
}

export default function* () {
  yield takeLatest(
    [
      loginActions.login().type,
    ],
    loginSaga
  )
}
