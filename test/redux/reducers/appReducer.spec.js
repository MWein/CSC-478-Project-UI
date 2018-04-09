import { constants as appActions } from '../../../src/redux/actions/appActions'
import reducer from '../../../src/redux/reducers/appReducer'


const initialState = {
  page: '',
  loading: 0,
  token: '',
  username: '',
  role: '',
  firstName: '',
  lastName: '',
  requireSecurityQuestion: false,
}


describe('App reducer spec', () => {
  it('Exports the default state', () => {
    const actual = reducer()
    expect(actual).toEqual(initialState)
  })

  it('Responds to SET_PAGE', () => {
    const action = {
      type: appActions.SET_PAGE,
      payload: 'settings',
    }

    const expected = {
      ...initialState,
      page: action.payload,
    }

    const actual = reducer(initialState, action)
    expect(actual).toEqual(expected)
  })


  it('Responds to OPEN_EMPLOYEE_PAGE', () => {
    const action = {
      type: appActions.OPEN_EMPLOYEE_PAGE,
      payload: null,
    }

    const expected = {
      ...initialState,
      page: 'employees',
    }

    const actual = reducer(initialState, action)
    expect(actual).toEqual(expected)
  })

  it('Responds to OPEN_REPORTS_PAGE', () => {
    const action = {
      type: appActions.OPEN_REPORTS_PAGE,
      payload: null,
    }

    const expected = {
      ...initialState,
      page: 'reports',
    }

    const actual = reducer(initialState, action)
    expect(actual).toEqual(expected)
  })

  it('Responds to OPEN_SETTINGS_PAGE', () => {
    const action = {
      type: appActions.OPEN_SETTINGS_PAGE,
      payload: null,
    }

    const expected = {
      ...initialState,
      page: 'settings',
    }

    const actual = reducer(initialState, action)
    expect(actual).toEqual(expected)
  })

  it('Responds to OPEN_TRANSACTION_PAGE', () => {
    const action = {
      type: appActions.OPEN_TRANSACTION_PAGE,
      payload: null,
    }

    const expected = {
      ...initialState,
      page: 'transaction',
    }

    const actual = reducer(initialState, action)
    expect(actual).toEqual(expected)
  })

  it('Responds to INC_LOADING', () => {
    const action = {
      type: appActions.INC_LOADING,
      payload: null,
    }

    const expected = {
      ...initialState,
      loading: 1,
    }

    const actual = reducer(initialState, action)
    expect(actual).toEqual(expected)
  })

  it('Responds to DEC_LOADING', () => {
    const action = {
      type: appActions.DEC_LOADING,
      payload: null,
    }

    const mockState = {
      ...initialState,
      loading: 4,
    }

    const expected = {
      ...initialState,
      loading: 3,
    }

    const actual = reducer(mockState, action)
    expect(actual).toEqual(expected)
  })

  it('Responds to SET_TOKEN', () => {
    const action = {
      type: appActions.SET_TOKEN,
      payload: 'asdfasdfasdf',
    }

    const expected = {
      ...initialState,
      token: action.payload,
    }

    const actual = reducer(initialState, action)
    expect(actual).toEqual(expected)
  })

  it('Responds to SET_USERNAME', () => {
    const action = {
      type: appActions.SET_USERNAME,
      payload: 'God',
    }

    const expected = {
      ...initialState,
      username: action.payload,
    }

    const actual = reducer(initialState, action)
    expect(actual).toEqual(expected)
  })

  it('Responds to SET_ROLE', () => {
    const action = {
      type: appActions.SET_ROLE,
      payload: 'God',
    }

    const expected = {
      ...initialState,
      role: action.payload,
    }

    const actual = reducer(initialState, action)
    expect(actual).toEqual(expected)
  })

  it('Responds to SET_FIRST_NAME', () => {
    const action = {
      type: appActions.SET_FIRST_NAME,
      payload: 'Mike',
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
      type: appActions.SET_LAST_NAME,
      payload: 'Weinberg',
    }

    const expected = {
      ...initialState,
      lastName: action.payload,
    }

    const actual = reducer(initialState, action)
    expect(actual).toEqual(expected)
  })

  it('Responds to SET_REQUIRE_SECURITY_QUESTION', () => {
    const action = {
      type: appActions.SET_REQUIRE_SECURITY_QUESTION,
      payload: true,
    }

    const expected = {
      ...initialState,
      requireSecurityQuestion: action.payload,
    }

    const actual = reducer(initialState, action)
    expect(actual).toEqual(expected)
  })
})
