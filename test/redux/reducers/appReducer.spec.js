import { constants as appActions } from '../../../src/redux/actions/appActions'
import reducer from '../../../src/redux/reducers/appReducer'


const initialState = {
  loading: 0,
  token: '',
}


describe('App reducer spec', () => {
  it('Exports the default state', () => {
    const actual = reducer()
    expect(actual).toEqual(initialState)
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
})
