import {
  call,
  put as dispatch,
  select,
  takeLatest,
} from 'redux-saga/effects'
import { actions as appActions } from '../actions/appActions'
import { getUsername } from '../selectors'
import { actions as loginActions } from '../actions/loginActions'
import { post } from './helpers/makeFetchCall'

export function* getSecurityQuestionsSaga() {
  yield dispatch(appActions.incLoading())

  const url = 'http://csc478team301.uisad.uis.edu:8080/getSecurityQuestion'

  const id = yield select(getUsername)
  const body = {
    id,
  }

  const response = yield call(post, {
    url,
    body: JSON.stringify(body),
  })

  if (response.payload.error) {
    console.log(response.payload.errorMsg)
  }

  yield dispatch(appActions.decLoading())
}

export default function* () {
  yield takeLatest(
    [
      loginActions.getSecurityQuestion().type,
    ],
    getSecurityQuestionsSaga
  )
}
