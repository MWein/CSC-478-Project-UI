import { constants as errorActions } from '../../../src/redux/actions/errorMessageActions'
import reducer from '../../../src/redux/reducers/errorMessageReducer'


const initialState = {
  title: '',
  error: false,
  message: '',
}


describe('Error message reducer spec', () => {
  it('Exports the default state', () => {
    const actual = reducer()
    expect(actual).toEqual(initialState)
  })

  it('Responds to DISPLAY_MESSAGE', () => {
    const action = {
      type: errorActions.DISPLAY_MESSAGE,
      payload: 'Owen Wilson - Wooow',
    }

    const expected = {
      error: true,
      message: action.payload,
      title: 'Message',
    }

    const actual = reducer(initialState, action)
    expect(actual).toEqual(expected)
  })

  it('Responds to DISPLAY_ERROR', () => {
    const action = {
      type: errorActions.DISPLAY_ERROR,
      payload: 'Owen Wilson - Wooow',
    }

    const expected = {
      error: true,
      message: action.payload,
      title: 'Error',
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
      title: 'Error',
      error: true,
      message: 'Hello, Joe'
    }

    const expected = {
      ...mockState,
      error: false,
    }

    const actual = reducer(mockState, action)
    expect(actual).toEqual(expected)
  })
})
