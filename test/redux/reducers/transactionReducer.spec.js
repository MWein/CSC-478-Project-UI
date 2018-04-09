import { constants as transActions } from '../../../src/redux/actions/transactionActions'
import reducer from '../../../src/redux/reducers/transactionReducer'


const initialState = {
  customer: {},
}


describe('Transaction reducer spec', () => {
  it('Exports the default state', () => {
    const actual = reducer()
    expect(actual).toEqual(initialState)
  })

  it('Responds to CLEAR_TRANSACTION', () => {
    const action = {
      type: transActions.CLEAR_TRANSACTION,
      payload: null,
    }

    const expected = initialState

    const actual = reducer(initialState, action)
    expect(actual).toEqual(expected)
  })

  it('Responds to SET_SELECTED_CUSTOMER', () => {
    const action = {
      type: transActions.SET_SELECTED_CUSTOMER,
      payload: { name: 'Hello', othername: 'Hello is not a name' },
    }

    const expected = {
      ...initialState,
      customer: action.payload,
    }

    const actual = reducer(initialState, action)
    expect(actual).toEqual(expected)
  })
})
