import {
  call,
  put as dispatch,
  select,
  takeLatest,
} from 'redux-saga/effects'
import {
  getCustomer,
  getMovieList,
  getToken,
} from '../selectors'
import getServerURL from './helpers/getServerURL'
import { post } from './helpers/makeFetchCall'
import { actions as transactionActions } from '../actions/transactionActions'


export function* createTransactionSaga() {
  const url = `${getServerURL()}/createTransaction`
  const token = yield select(getToken)

  const customer = yield select(getCustomer)
  const customerID = customer.id

  const movieList = yield select(getMovieList)
  const copyIDs = movieList.map(movie => movie.copyID)

  const body = {
    token,
    customerID,
    copyIDs,
  }

  yield call(post, {
    url,
    body: JSON.stringify(body),
  })

  yield dispatch(transactionActions.clearTransaction())
}

export default function* () {
  yield takeLatest(
    [
      transactionActions.createTransaction().type,
    ],
    createTransactionSaga
  )
}
