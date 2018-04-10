import {
  call,
  put as dispatch,
  select,
  takeLatest,
} from 'redux-saga/effects'
import {
  getMovieCopiesList,
  getMovieUPC,
  getNewCopy,
  getToken,
} from '../selectors'
import getServerURL from './helpers/getServerURL'
import { actions as movieLookupActions } from '../actions/movieLookupActions'
import { post } from './helpers/makeFetchCall'


export function* addMovieCopySaga() {
  const url = `${getServerURL()}/createMovie`
  const upc = yield select(getMovieUPC)
  const token = yield select(getToken)
  const newCopy = yield select(getNewCopy)

  const body = {
    token,
    upc,
    copies: [
      newCopy,
    ],
  }

  const response = yield call(post, {
    url,
    body: JSON.stringify(body),
  })

  if (response.payload.error && response.payload.errorMsg === 'Copy ID already exists') {
    yield dispatch(movieLookupActions.setCopyExistsError(true))
  } else {
    // Success
    const copiesList = yield select(getMovieCopiesList)

    yield dispatch(movieLookupActions.setCopyExistsError(false))
    yield dispatch(movieLookupActions.setCopiesList([ ...copiesList, newCopy ]))
  }
}

export default function* () {
  yield takeLatest(
    [
      movieLookupActions.createCopy().type,
    ],
    addMovieCopySaga
  )
}
