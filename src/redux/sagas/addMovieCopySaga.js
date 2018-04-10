import {
  call,
  select,
  takeLatest,
} from 'redux-saga/effects'
import {
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

  yield call(post, {
    url,
    body: JSON.stringify(body),
  })
}

export default function* () {
  yield takeLatest(
    [
      movieLookupActions.createCopy().type,
    ],
    addMovieCopySaga
  )
}
