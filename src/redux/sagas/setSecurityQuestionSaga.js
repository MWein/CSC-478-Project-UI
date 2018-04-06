import {
  call,
  put as dispatch,
  select,
  takeLatest,
} from 'redux-saga/effects'
import {
  getSecurityAnswer,
  getSecurityQuestion,
  getToken,
  recoveryMode,
} from '../selectors'
import { actions as appActions } from '../actions/appActions'
import { actions as errorMessageActions } from '../actions/errorMessageActions'
import { actions as navBarActions } from '../actions/navBarActions'
import { post } from './helpers/makeFetchCall'
import { actions as settingActions } from '../actions/UserSettingsActions'

export function* setSecurityQuestionSaga() {
  const url = 'http://csc478team301.uisad.uis.edu:8080/setSecurityQuestion'

  const token = yield select(getToken)
  const question = yield select(getSecurityQuestion)
  const answer = yield select(getSecurityAnswer)

  const body = {
    token,
    question,
    answer,
  }

  const response = yield call(post, {
    url,
    body: JSON.stringify(body),
  })

  if (response.error) {
    yield dispatch(errorMessageActions.displayError(response.statusText))

    return
  }

  if (response.payload.error) {
    console.log(response.payload.errorMsg)
  } else {
    yield dispatch(settingActions.setSecurityQuestionChangeSuccess(true))
    yield dispatch(appActions.setRequireSecurityQuestion(false))

    const isRecoveryMode = yield select(recoveryMode)

    yield dispatch(navBarActions.setNavEnabled(!isRecoveryMode))

    yield dispatch(settingActions.setSecurityQuestion(''))
    yield dispatch(settingActions.setSecurityAnswer(''))
  }
}

export default function* () {
  yield takeLatest(
    [
      settingActions.changeSecurityQuestion().type,
    ],
    setSecurityQuestionSaga
  )
}
