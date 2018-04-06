import {
  call,
  put as dispatch,
  select,
  takeLatest,
} from 'redux-saga/effects'
import { actions as errorMessageActions } from '../actions/errorMessageActions'
import getServerURL from './helpers/getServerURL'
import { getUsername } from '../selectors'
import { actions as loginActions } from '../actions/loginActions'
import { post } from './helpers/makeFetchCall'

export function* getSecurityQuestionsSaga() {
  const url = `${getServerURL()}/getSecurityQuestion`
  const id = yield select(getUsername)
  const body = {
    id,
  }

  const response = yield call(post, {
    url,
    body: JSON.stringify(body),
  })

  if (response.error && !response.statusText.includes('Not Found')) {
    yield dispatch(errorMessageActions.displayError(response.statusText))

    return
  }

  if (response.payload.error) {
    yield dispatch(loginActions.setUsernameError(response.payload.errorMsg))
  } else {
    yield dispatch(loginActions.setUsernameError(''))
    yield dispatch(loginActions.setSecurityQuestion(response.payload.question))
    yield dispatch(loginActions.nextFPStep())
  }
}

export default function* () {
  yield takeLatest(
    [
      loginActions.getSecurityQuestion().type,
    ],
    getSecurityQuestionsSaga
  )
}
