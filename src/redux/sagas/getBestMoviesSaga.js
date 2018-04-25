import {
  call,
  //put as dispatch,
  select,
  takeLatest,
} from 'redux-saga/effects'
import { actions as appActions } from '../actions/appActions'
//import { actions as employeeActions } from '../actions/employeeActions'
import getServerURL from './helpers/getServerURL'
import { getToken } from '../selectors'
import { post } from './helpers/makeFetchCall'

export function* getBestMoviesSaga() {
  const url = `${getServerURL()}/bestMovies`
  const token = yield select(getToken)
  const body = {
    token,
  }

  const response = yield call(post, {
    url,
    body: JSON.stringify(body),
  })

  console.log('Best Movies', response.payload)
}

export default function* () {
  yield takeLatest(
    [
      appActions.openReportsPage().type,
    ],
    getBestMoviesSaga
  )
}
