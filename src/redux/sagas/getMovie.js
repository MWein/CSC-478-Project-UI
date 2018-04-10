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

  if (response.payload.error) {
    yield dispatch(errorMessageActions.displayError(response.payload.errorMsg))
  } else if (response.payload.rows.length === 0) {
    yield dispatch(errorMessageActions.displayError('No UPC Found'))
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
