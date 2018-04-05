import {
  call,
  put as dispatch,
  select,
  takeLatest,
} from 'redux-saga/effects'
import {
  getEmployeeAddress,
  getEmployeeFName,
  getEmployeeId,
  getEmployeeLName,
  getEmployeeList,
  getEmployeePhone,
  getEmployeePin,
  getEmployeeRole,
  getToken,
} from '../selectors'
import { actions as editEmployeeActions } from '../actions/editEmployeeActions'
import { actions as employeeActions } from '../actions/employeeActions'
import { actions as errorMessageActions } from '../actions/errorMessageActions'
import { post } from './helpers/makeFetchCall'


export function* createEmployeeSaga() {
  const url = 'http://csc478team301.uisad.uis.edu:8080/createUser'

  const token = yield select(getToken)

  const id = yield select(getEmployeeId)
  const pin = yield select(getEmployeePin)
  const role = yield select(getEmployeeRole)
  const f_name = yield select(getEmployeeFName)
  const l_name = yield select(getEmployeeLName)
  const phone = yield select(getEmployeePhone)
  const address = yield select(getEmployeeAddress)

  const body = {
    token,
    id,
    pin,
    role,
    f_name,
    l_name,
    phone,
    address,
  }

  const response = yield call(post, {
    url,
    body: JSON.stringify(body),
  })

  if (response.payload.error) {
    yield dispatch(errorMessageActions.displayError(response.payload.errorMsg))
  } else {
    const employeeList = yield select(getEmployeeList)

    const newEmployeeList = [
      ...employeeList,
      {
        id,
        f_name,
        l_name,
        role,
        phone,
        address,
        active: true,
        timestamp: null,
      },
    ]

    yield dispatch(employeeActions.setEmployeeList(newEmployeeList))
    yield dispatch(editEmployeeActions.closeEmployeeEditor())
  }
}

export default function* () {
  yield takeLatest(
    [
      editEmployeeActions.createNewEmployee().type,
    ],
    createEmployeeSaga
  )
}
