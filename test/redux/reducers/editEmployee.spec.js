import { constants as employeeActions } from '../../../src/redux/actions/editEmployeeActions'
import reducer from '../../../src/redux/reducers/editEmployeeReducer'


const initialState = {
  open: false,
  mode: '',
  username: '',
  type: 'employee',
  firstName: '',
  lastName: '',
  phone: '',
  address: '',
  password: '',
  confirmPassword: '',
}


describe('Employee editor reducer spec', () => {
  it('Exports the default state', () => {
    const actual = reducer()
    expect(actual).toEqual(initialState)
  })

  it('Responds to OPEN_EMPLOYEE_EDITOR with empty object', () => {
    const action = {
      type: employeeActions.OPEN_EMPLOYEE_EDITOR,
      payload: null,
    }

    const expected = {
      ...initialState,
      open: true,
      mode: 'add',
    }

    const actual = reducer(initialState, action)
    expect(actual).toEqual(expected)
  })

  it('Responds to empty OPEN_EMPLOYEE_EDITOR with filled object', () => {
    const action = {
      type: employeeActions.OPEN_EMPLOYEE_EDITOR,
      payload: {
        id: 'bondJ',
        f_name: 'James',
        l_name: 'Bond',
        role: 'admin',
        phone: '123456',
        address: '123 Fake Street',
      },
    }

    const expected = {
      ...initialState,
      open: true,
      mode: 'edit',
      username: action.payload.id,
      firstName: action.payload.f_name,
      lastName: action.payload.l_name,
      type: action.payload.role,
      phone: action.payload.phone,
      address: action.payload.address,
    }

    const actual = reducer(initialState, action)
    expect(actual).toEqual(expected)
  })

  it('Responds to CLOSE_EMPLOYEE_EDITOR', () => {
    const action = {
      type: employeeActions.CLOSE_EMPLOYEE_EDITOR,
      payload: null,
    }

    const mockState = {
      ...initialState,
      open: true,
    }

    const expected = {
      ...initialState,
      open: false,
    }

    const actual = reducer(mockState, action)
    expect(actual).toEqual(expected)
  })

  it('Responds to SET_USERNAME', () => {
    const action = {
      type: employeeActions.SET_USERNAME,
      payload: 'some username',
    }

    const expected = {
      ...initialState,
      username: action.payload,
    }

    const actual = reducer(initialState, action)
    expect(actual).toEqual(expected)
  })

  it('Responds to SET_EMPLOYEE_TYPE', () => {
    const action = {
      type: employeeActions.SET_EMPLOYEE_TYPE,
      payload: 'admin',
    }

    const expected = {
      ...initialState,
      type: action.payload,
    }

    const actual = reducer(initialState, action)
    expect(actual).toEqual(expected)
  })

  it('Responds to SET_FIRST_NAME', () => {
    const action = {
      type: employeeActions.SET_FIRST_NAME,
      payload: 'Donald',
    }

    const expected = {
      ...initialState,
      firstName: action.payload,
    }

    const actual = reducer(initialState, action)
    expect(actual).toEqual(expected)
  })

  it('Responds to SET_LAST_NAME', () => {
    const action = {
      type: employeeActions.SET_LAST_NAME,
      payload: 'Trump',
    }

    const expected = {
      ...initialState,
      lastName: action.payload,
    }

    const actual = reducer(initialState, action)
    expect(actual).toEqual(expected)
  })

  it('Responds to SET_PHONE_NUMBER', () => {
    const action = {
      type: employeeActions.SET_PHONE_NUMBER,
      payload: '123456',
    }

    const expected = {
      ...initialState,
      phone: action.payload,
    }

    const actual = reducer(initialState, action)
    expect(actual).toEqual(expected)
  })

  it('Responds to SET_ADDRESS', () => {
    const action = {
      type: employeeActions.SET_ADDRESS,
      payload: '123 Fake Street',
    }

    const expected = {
      ...initialState,
      address: action.payload,
    }

    const actual = reducer(initialState, action)
    expect(actual).toEqual(expected)
  })

  it('Responds to SET_PASSWORD', () => {
    const action = {
      type: employeeActions.SET_PASSWORD,
      payload: 'mypassword',
    }

    const expected = {
      ...initialState,
      password: action.payload,
    }

    const actual = reducer(initialState, action)
    expect(actual).toEqual(expected)
  })

  it('Responds to SET_CONFIRM_PASSWORD', () => {
    const action = {
      type: employeeActions.SET_CONFIRM_PASSWORD,
      payload: 'myPassword',
    }

    const expected = {
      ...initialState,
      confirmPassword: action.payload,
    }

    const actual = reducer(initialState, action)
    expect(actual).toEqual(expected)
  })
})
