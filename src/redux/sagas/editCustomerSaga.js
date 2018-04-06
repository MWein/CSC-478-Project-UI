import {
  call,
  select,
  takeLatest,
} from 'redux-saga/effects'
import {
  getCallbackFunction,
  getCustomerAddress,
  getCustomerEmail,
  getCustomerFirstName,
  getCustomerLastName,
  getCustomerPhoneNumber,
  getSelectedCustomer,
  getToken,
} from '../selectors'
import { actions as customerLookupActions } from '../actions/customerLookupActions'
import getServerURL from './helpers/getServerURL'
import { post } from './helpers/makeFetchCall'

export function* editCustomerSaga() {
  const url = `${getServerURL()}/editCustomer`

  const token = yield select(getToken)

  const { id } = yield select(getSelectedCustomer)
  const f_name = yield select(getCustomerFirstName)
  const l_name = yield select(getCustomerLastName)
  const phone = yield select(getCustomerPhoneNumber)
  const email = yield select(getCustomerEmail)
  const address = yield select(getCustomerAddress)

  const body = {
    token,
    id,
    f_name,
    l_name,
    phone,
    email,
    address,
  }

  const response = yield call(post, {
    url,
    body: JSON.stringify(body),
  })

  if (response.payload.error) {
    console.log('Error ', response.payload.errorMsg)
  } else {
    const id = response.payload.id
    const selectedCustomer = {
      active: true,
      id,
      f_name,
      l_name,
      phone,
      email,
      address,
    }

    const callback = yield select(getCallbackFunction)

    callback(selectedCustomer)
  }
}

export default function* () {
  yield takeLatest(
    [
      customerLookupActions.editCustomer().type,
    ],
    editCustomerSaga
  )
}
