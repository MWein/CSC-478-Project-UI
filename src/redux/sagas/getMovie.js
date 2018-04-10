import {
  call,
  put as dispatch,
  select,
  takeLatest,
} from 'redux-saga/effects'
import {
  getMovieCopyID,
  getMovieUPC,
  getToken,
} from '../selectors'
import { actions as errorMessageActions } from '../actions/errorMessageActions'
import getServerURL from './helpers/getServerURL'
import { actions as movieLookupActions } from '../actions/movieLookupActions'
import { post } from './helpers/makeFetchCall'


export function* getMovieSaga() {
  const url = `${getServerURL()}/getMovie`
  const upc = yield select(getMovieUPC)
  const copyID = yield select(getMovieCopyID)
  const token = yield select(getToken)
  const body = {
    token,
    upc,
    copyID,
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

    // TODO Respond to error... or dont

  } else {
    yield dispatch(movieLookupActions.setMoviesList(response.payload.rows))
  }
}

export default function* () {
  yield takeLatest(
    [
      movieLookupActions.getMovie().type,
    ],
    getMovieSaga
  )
}
