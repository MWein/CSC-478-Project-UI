import { constants as loginActions } from '../../src/redux/actions/loginActions'
import reducer from '../../src/redux/reducers/loginReducer'


const initialState = {
  username: '',
  password: '',
  forgotPassword: false,
  forgotPasswordStep: 0,
}


describe('Login reducer spec', () => {
  it('Exports the default state', () => {
    const actual = reducer()
    expect(actual).toEqual(initialState)
  })

  it('Responds to SET_USERNAME', () => {
    const action = {
      type: loginActions.SET_USERNAME,
      payload: 'some username',
    }

    const expected = {
      ...initialState,
      username: action.payload,
    }

    const actual = reducer(initialState, action)
    expect(actual).toEqual(expected)
  })

  it('Responds to SET_PASSWORD', () => {
    const action = {
      type: loginActions.SET_PASSWORD,
      payload: 'some password',
    }

    const expected = {
      ...initialState,
      password: action.payload,
    }

    const actual = reducer(initialState, action)
    expect(actual).toEqual(expected)
  })

  it('Responds to SET_FORGOT_PASSWORD', () => {
    const action = {
      type: loginActions.SET_FORGOT_PASSWORD,
      payload: true,
    }

    const expected = {
      ...initialState,
      forgotPassword: action.payload,
    }

    const actual = reducer(initialState, action)
    expect(actual).toEqual(expected)
  })

  it('Responds to NEXT_FP_STEP', () => {
    const action = {
      type: loginActions.NEXT_FP_STEP,
      payload: null,
    }

    const mockState = {
      ...initialState,
      forgotPasswordStep: 2,
    }

    const expected = {
      ...initialState,
      forgotPasswordStep: 3,
    }

    const actual = reducer(mockState, action)
    expect(actual).toEqual(expected)
  })

  it('Responds to RESET_FP', () => {
    const action = {
      type: loginActions.RESET_FP,
      payload: null,
    }

    const mockState = {
      ...initialState,
      forgotPasswordStep: 2,
    }

    const expected = {
      ...initialState,
      forgotPasswordStep: 0,
    }

    const actual = reducer(mockState, action)
    expect(actual).toEqual(expected)
  })
})
