import reducer from '../../../src/redux/reducers/returnReducer'
import { constants as returnActions } from '../../../src/redux/actions/returnActions'


const initialState = {
  openTransactions: [],
  overdueOnly: false,
}


describe('Return reducer spec', () => {
  it('Exports the default state', () => {
    const actual = reducer()
    expect(actual).toEqual(initialState)
  })

  it('Responds to SET_OPEN_TRANSACTIONS', () => {
    const action = {
      type: returnActions.SET_OPEN_TRANSACTIONS,
      payload: [ 'one', 'two' ],
    }

    const expected = {
      ...initialState,
      openTransactions: action.payload,
    }

    const actual = reducer(initialState, action)
    expect(actual).toEqual(expected)
  })

  it('Responds to SET_OVERDUE_ONLY', () => {
    const action = {
      type: returnActions.SET_OVERDUE_ONLY,
      payload: true,
    }

    const expected = {
      ...initialState,
      overdueOnly: action.payload,
    }

    const actual = reducer(initialState, action)
    expect(actual).toEqual(expected)
  })
})
