import { constants as appActions } from '../../../src/redux/actions/UserSettingsActions'
import reducer from '../../../src/redux/reducers/UserSettingsReducer'


const initialState = {
  recoveryMode: false,
  oldPassword: '',
  newPassword: '',
  securityQuestion: '',
  securityAnswer: '',
  passwordChangeSuccess: false,
  securityQuestionChangeSuccess: false,
}


describe('User setting reducer spec', () => {
  it('Exports the default state', () => {
    const actual = reducer()
    expect(actual).toEqual(initialState)
  })


  it('Responds to SET_RECOVERY_MODE', () => {
    const action = {
      type: appActions.SET_RECOVERY_MODE,
      payload: true,
    }

    const expected = {
      ...initialState,
      recoveryMode: true,
    }

    const actual = reducer(initialState, action)
    expect(actual).toEqual(expected)
  })


  it('Responds to SET_OLD_PASSWORD', () => {
    const action = {
      type: appActions.SET_OLD_PASSWORD,
      payload: 'old password',
    }

    const expected = {
      ...initialState,
      oldPassword: action.payload,
    }

    const actual = reducer(initialState, action)
    expect(actual).toEqual(expected)
  })


  it('Responds to SET_NEW_PASSWORD', () => {
    const action = {
      type: appActions.SET_NEW_PASSWORD,
      payload: 'new password',
    }

    const expected = {
      ...initialState,
      newPassword: action.payload,
    }

    const actual = reducer(initialState, action)
    expect(actual).toEqual(expected)
  })

  it('Responds to SET_SECURITY_QUESTION', () => {
    const action = {
      type: appActions.SET_SECURITY_QUESTION,
      payload: 'Can I ask you a question?',
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
      type: appActions.SET_SECURITY_ANSWER,
      payload: 'No',
    }

    const expected = {
      ...initialState,
      securityAnswer: action.payload,
    }

    const actual = reducer(initialState, action)
    expect(actual).toEqual(expected)
  })

  it('Responds to SET_PASSWORD_CHANGE_SUCCESS', () => {
    const action = {
      type: appActions.SET_PASSWORD_CHANGE_SUCCESS,
      payload: true,
    }

    const expected = {
      ...initialState,
      passwordChangeSuccess: action.payload,
    }

    const actual = reducer(initialState, action)
    expect(actual).toEqual(expected)
  })

  it('Responds to SET_SECURITY_QUESTION_CHANGE_SUCCESS', () => {
    const action = {
      type: appActions.SET_SECURITY_QUESTION_CHANGE_SUCCESS,
      payload: true,
    }

    const expected = {
      ...initialState,
      securityQuestionChangeSuccess: action.payload,
    }

    const actual = reducer(initialState, action)
    expect(actual).toEqual(expected)
  })
})
