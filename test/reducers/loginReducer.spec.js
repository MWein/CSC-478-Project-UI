import { constants as loginActions } from '../../src/redux/actions/loginActions'
import reducer from '../../src/redux/reducers/loginReducer'


const initialState = {
  username: '',
  password: '',
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
})
