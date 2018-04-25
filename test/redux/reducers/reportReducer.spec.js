import reducer from '../../../src/redux/reducers/reportsReducer'
import { constants as reportActions } from '../../../src/redux/actions/reportsActions'


const initialState = {
  resultLimit: 10,
  bestCustomers: [],
  bestMovies: [],
}


describe('Report reducer spec', () => {
  it('Exports the default state', () => {
    const actual = reducer()
    expect(actual).toEqual(initialState)
  })

  it('Responds to SET_RESULT_LIMIT', () => {
    const action = {
      type: reportActions.SET_RESULT_LIMIT,
      payload: 69,
    }

    const expected = {
      ...initialState,
      resultLimit: action.payload,
    }

    const actual = reducer(initialState, action)
    expect(actual).toEqual(expected)
  })

  it('Responds to SET_BEST_CUSTOMERS', () => {
    const action = {
      type: reportActions.SET_BEST_CUSTOMERS,
      payload: [
        {
          name: 'some guy',
        },
        {
          name: 'some other guy',
        }
      ],
    }

    const expected = {
      ...initialState,
      bestCustomers: action.payload,
    }

    const actual = reducer(initialState, action)
    expect(actual).toEqual(expected)
  })

  it('Responds to SET_BEST_MOVIES', () => {
    const action = {
      type: reportActions.SET_BEST_MOVIES,
      payload: [
        {
          name: 'Lord of the Rings',
        },
        {
          name: 'Lord of the Flies',
        }
      ],
    }

    const expected = {
      ...initialState,
      bestMovies: action.payload,
    }

    const actual = reducer(initialState, action)
    expect(actual).toEqual(expected)
  })
})
