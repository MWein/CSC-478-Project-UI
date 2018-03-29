import { constants as lookupActions } from '../../../src/redux/actions/customerLookupActions'
import reducer from '../../../src/redux/reducers/customerLookupReducer'


const initialState = {
  phone: '',
  lName: '',
  customers: [],
  selectedCustomer: '',
}

describe('Customer Lookup reducer spec', () => {
  it('Exports the default state', () => {
    const actual = reducer()
    expect(actual).toEqual(initialState)
  })

  it('Responds to SET_PHONE_NUMBER', () => {
    const action = {
      type: lookupActions.SET_PHONE_NUMBER,
      payload: '8675309',
    }

    const expected = {
      ...initialState,
      phone: action.payload,
    }

    const actual = reducer(initialState, action)
    expect(actual).toEqual(expected)
  })

  it('Responds to SET_LAST_NAME', () => {
    const action = {
      type: lookupActions.SET_LAST_NAME,
      payload: 'Bower',
    }

    const expected = {
      ...initialState,
      lName: action.payload,
    }

    const actual = reducer(initialState, action)
    expect(actual).toEqual(expected)
  })

  it('Responds to SET_CUSTOMERS', () => {
    const action = {
      type: lookupActions.SET_CUSTOMERS,
      payload: [ 'some', 'list' ],
    }

    const expected = {
      ...initialState,
      customers: action.payload,
    }

    const actual = reducer(initialState, action)
    expect(actual).toEqual(expected)
  })

  it('Responds to SET_SELECTED_CUSTOMER', () => {
    const action = {
      type: lookupActions.SET_SELECTED_CUSTOMER,
      payload: '',
    }

    const expected = {
      ...initialState,
      selectedCustomer: action.payload,
    }

    const actual = reducer(initialState, action)
    expect(actual).toEqual(expected)
  })
})
