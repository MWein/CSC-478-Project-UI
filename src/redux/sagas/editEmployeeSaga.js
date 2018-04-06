import {
  call,
  put as dispatch,
  select,
  takeLatest,
} from 'redux-saga/effects'
import {
  getEmployeeActive,
  getEmployeeAddress,
  getEmployeeFName,
  getEmployeeId,
  getEmployeeLName,
  getEmployeeList,
  getEmployeePhone,
  getEmployeeRole,
  getToken,
} from '../selectors'
import { actions as editEmployeeActions } from '../actions/editEmployeeActions'
import { actions as employeeActions } from '../actions/employeeActions'
import { actions as errorMessageActions } from '../actions/errorMessageActions'
import getServerURL from './helpers/getServerURL'
import { post } from './helpers/makeFetchCall'

export function* editEmployeeSaga() {
  const url = `${getServerURL()}/editUser`

  const token = yield select(getToken)

  const id = yield select(getEmployeeId)
  const role = yield select(getEmployeeRole)
  const f_name = yield select(getEmployeeFName)
  const l_name = yield select(getEmployeeLName)
  const phone = yield select(getEmployeePhone)
  const address = yield select(getEmployeeAddress)
  const active = yield select(getEmployeeActive)

  const body = {
    token,
    id,
    active,
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

    const employeeListFiltered = employeeList.filter(employee => employee.id !== id)

    const newEmployeeList = [
      ...employeeListFiltered,
      {
        id,
        f_name,
        l_name,
        role,
        phone,
        address,
        active,
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
      editEmployeeActions.editEmployee().type,
    ],
    editEmployeeSaga
  )
}
