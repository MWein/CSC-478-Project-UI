import {
  call,
  put as dispatch,
  select,
  takeLatest,
} from 'redux-saga/effects'
import {
  getNewPassword,
  getToken,
  requireSecurityQuestion,
} from '../selectors'
import { actions as errorMessageActions } from '../actions/errorMessageActions'
import getServerURL from './helpers/getServerURL'
import { actions as loginActions } from '../actions/loginActions'
import { actions as navBarActions } from '../actions/navBarActions'
import { post } from './helpers/makeFetchCall'
import { actions as settingActions } from '../actions/UserSettingsActions'

export function* changePasswordSaga() {
  const url = `${getServerURL()}/setPassword`

  const token = yield select(getToken)
  const pin = yield select(getNewPassword)

  const body = {
    token,
    pin,
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
    yield dispatch(settingActions.setPasswordChangeSuccess(true))
    yield dispatch(settingActions.setRecoveryMode(false))

    const securityQuestionRequired = yield select(requireSecurityQuestion)

    yield dispatch(navBarActions.setNavEnabled(!securityQuestionRequired))

    yield dispatch(settingActions.setOldPassword(''))
    yield dispatch(settingActions.setNewPassword(''))
    yield dispatch(loginActions.setPassword(pin))
  }
}

export default function* () {
  yield takeLatest(
    [
      settingActions.changePassword().type,
    ],
    changePasswordSaga
  )
}
