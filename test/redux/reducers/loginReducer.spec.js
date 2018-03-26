import { constants as loginActions } from '../../../src/redux/actions/loginActions'
import reducer from '../../../src/redux/reducers/loginReducer'


const initialState = {
  username: '',
  password: '',
  usernameError: '',
  loginError: '',
  forgotPassword: false,
  forgotPasswordStep: 0,
  securityQuestion: '',
  securityAnswer: '',
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

  it('Responds to SET_SECURITY_QUESTION', () => {
    const action = {
      type: loginActions.SET_SECURITY_QUESTION,
      payload: 'Whats your dogs name?',
    }

    const expected = {
      ...initialState,
      securityQuestion: action.payload,
    }

    const actual = reducer(initialState, action)
    expect(actual).toEqual(expected)
  })

  it('Responds to SET_SECURITY_ANSWER', () => {
    const action = {
      type: loginActions.SET_SECURITY_ANSWER,
      payload: 'Spike',
    }

    const expected = {
      ...initialState,
      securityAnswer: action.payload,
    }

    const actual = reducer(initialState, action)
    expect(actual).toEqual(expected)
  })

  it('Responds to SET_USERNAME_ERROR', () => {
    const action = {
      type: loginActions.SET_USERNAME_ERROR,
      payload: 'ERRORROROR',
    }

    const expected = {
      ...initialState,
      usernameError: action.payload,
    }

    const actual = reducer(initialState, action)
    expect(actual).toEqual(expected)
  })

  it('Responds to SET_LOGIN_ERROR', () => {
    const action = {
      type: loginActions.SET_LOGIN_ERROR,
      payload: 'ERRORROROR',
    }

    const expected = {
      ...initialState,
      loginError: action.payload,
    }

    const actual = reducer(initialState, action)
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
      securityQuestion: 'Why is the sky blue?',
      securityAnswer: 'Idk, infantry or something',
      usernameError: 'Something bad happened',
    }

    const expected = {
      ...initialState,
      forgotPasswordStep: 0,
      securityQuestion: '',
      securityAnswer: '',
      usernameError: '',
    }

    const actual = reducer(mockState, action)
    expect(actual).toEqual(expected)
  })
})
