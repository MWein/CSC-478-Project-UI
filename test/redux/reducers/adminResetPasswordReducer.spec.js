import { constants as appActions } from '../../../src/redux/actions/adminResetPasswordActions'
import reducer from '../../../src/redux/reducers/adminResetPasswordReducer'


const initialState = {
  open: false,
  password: '',
  confirmPassword: '',
}


describe('Admin Reset Password reducer spec', () => {
  it('Exports the default state', () => {
    const actual = reducer()
    expect(actual).toEqual(initialState)
  })

  it('Responds to OPEN_RESET_PASSWORD', () => {
    const action = {
      type: appActions.OPEN_RESET_PASSWORD,
      payload: null,
    }

    const expected = {
      ...initialState,
      open: true,
    }

    const actual = reducer(initialState, action)
    expect(actual).toEqual(expected)
  })

  it('Responds to CLOSE_RESET_PASSWORD', () => {
    const action = {
      type: appActions.CLOSE_RESET_PASSWORD,
      payload: null,
    }

    const mockState = {
      ...initialState,
      open: true
    }

    const expected = {
      ...initialState,
      open: false,
    }

    const actual = reducer(initialState, action)
    expect(actual).toEqual(expected)
  })

  it('Responds to SET_NEW_PASSWORD', () => {
    const action = {
      type: appActions.SET_NEW_PASSWORD,
      payload: 'some password',
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
      type: appActions.SET_CONFIRM_PASSWORD,
      payload: 'some password',
    }

    const expected = {
      ...initialState,
      confirmPassword: action.payload,
    }

    const actual = reducer(initialState, action)
    expect(actual).toEqual(expected)
  })
})
