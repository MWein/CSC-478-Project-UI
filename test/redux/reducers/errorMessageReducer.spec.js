import { constants as errorActions } from '../../../src/redux/actions/errorMessageActions'
import reducer from '../../../src/redux/reducers/errorMessageReducer'


const initialState = {
  error: false,
  message: '',
}


describe('Error message reducer spec', () => {
  it('Exports the default state', () => {
    const actual = reducer()
    expect(actual).toEqual(initialState)
  })

  it('Responds to DISPLAY_ERROR', () => {
    const action = {
      type: errorActions.DISPLAY_ERROR,
      payload: 'Owen Wilson - Wooow',
    }

    const expected = {
      error: true,
      message: action.payload,
    }

    const actual = reducer(initialState, action)
    expect(actual).toEqual(expected)
  })

  it('Responds to DISMISS_ERROR', () => {
    const action = {
      type: errorActions.DISMISS_ERROR,
      payload: null,
    }

    const mockState = {
      error: true,
      message: 'Hello, Joe'
    }

    const expected = initialState

    const actual = reducer(mockState, action)
    expect(actual).toEqual(expected)
  })
})
