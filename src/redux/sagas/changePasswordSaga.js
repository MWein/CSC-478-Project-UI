import {
  call,
  put as dispatch,
  select,
  takeLatest,
} from 'redux-saga/effects'
import {
  getNewPassword,
  getToken,
} from '../selectors'
import { actions as errorMessageActions } from '../actions/errorMessageActions'
import { actions as navBarActions } from '../actions/navBarActions'
import { post } from './helpers/makeFetchCall'
import { actions as settingActions } from '../actions/UserSettingsActions'


export function* changePasswordSaga() {
  const url = 'http://csc478team301.uisad.uis.edu:8080/setPassword'

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
    yield dispatch(navBarActions.setNavEnabled(true))

    yield dispatch(settingActions.setOldPassword(''))
    yield dispatch(settingActions.setNewPassword(''))
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
