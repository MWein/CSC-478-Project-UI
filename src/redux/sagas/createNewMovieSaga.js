import {
  call,
  put as dispatch,
  select,
  takeLatest,
} from 'redux-saga/effects'
import {
  getNewMovieTitle,
  getNewMovieUPC,
  getToken,
} from '../selectors'
import { actions as errorMessageActions } from '../actions/errorMessageActions'
import getServerURL from './helpers/getServerURL'
import { actions as movieLookupActions } from '../actions/movieLookupActions'
import { post } from './helpers/makeFetchCall'


export function* createNewMovieSaga() {
  const url = `${getServerURL()}/createMovie`
  const upc = yield select(getNewMovieUPC)
  const title = yield select(getNewMovieTitle)
  const token = yield select(getToken)

  const body = {
    token,
    upc,
    title,
  }

  const response = yield call(post, {
    url,
    body: JSON.stringify(body),
  })

  if (response.payload.error) {
    yield dispatch(errorMessageActions.displayError(response.payload.errorMsg))
  } else {
    // Success

    console.log('NEW MOVIE ADDED')
  }
}

export default function* () {
  yield takeLatest(
    [
      movieLookupActions.createMovie().type,
    ],
    createNewMovieSaga
  )
}
