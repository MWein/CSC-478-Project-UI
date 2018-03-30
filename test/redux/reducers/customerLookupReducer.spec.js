import { constants as lookupActions } from '../../../src/redux/actions/customerLookupActions'
import reducer from '../../../src/redux/reducers/customerLookupReducer'


const initialState = {
  callbackFunction: null,
  open: false,
  fName: '',
  lName: '',
  phone: '',
  email: '',
  address: '',
  customers: [],
  filteredCustomers: [],
  notFound: false,
  selectedCustomer: {},
  mode: '',
}

describe('Customer Lookup reducer spec', () => {
  it('Exports the default state', () => {
    const actual = reducer()
    expect(actual).toEqual(initialState)
  })

  it('Responds to OPEN_CUSTOMER_LOOKUP', () => {
    const action = {
      type: lookupActions.OPEN_CUSTOMER_LOOKUP,
      payload: null,
    }

    const expected = {
      ...initialState,
      open: true,
      callbackFunction: null,
    }

    const actual = reducer(initialState, action)
    expect(actual).toEqual(expected)
  })


  it('Responds to CLOSE_CUSTOMER_LOOKUP', () => {
    const action = {
      type: lookupActions.CLOSE_CUSTOMER_LOOKUP,
      payload: null,
    }

    const mockState = {
      open: true,
      fName: 'Mike',
      lName: 'Weinberg',
      phone: '123456',
      email: 'mwein2@uis.edu',
      address: '123 Fake Street',
      customers: [ 'some', 'list' ],
      selectedCustomer: { id: 'some customer' },
      notFound: true,
      mode: 'asdflkjj',
    }

    const expected = {
      ...initialState,
      customers: mockState.customers,
      mode: mockState.mode,
    }

    const actual = reducer(mockState, action)
    expect(actual).toEqual(expected)
  })


  it('Responds to SET_FIRST_NAME', () => {
    const action = {
      type: lookupActions.SET_FIRST_NAME,
      payload: 'Jack',
    }

    const expected = {
      ...initialState,
      fName: action.payload,
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


  it('Returns previous state if entered value is not a number', () => {
    const action = {
      type: lookupActions.SET_PHONE_NUMBER,
      payload: '8675309f',
    }

    const mockState = {
      ...initialState,
      phone: '8675309',
    }

    const expected = mockState

    const actual = reducer(mockState, action)
    expect(actual).toEqual(expected)
  })


  it('Responds to SET_EMAIL', () => {
    const action = {
      type: lookupActions.SET_EMAIL,
      payload: 'fake@email.com',
    }

    const expected = {
      ...initialState,
      email: action.payload,
    }

    const actual = reducer(initialState, action)
    expect(actual).toEqual(expected)
  })

  it('Responds to SET_ADDRESS', () => {
    const action = {
      type: lookupActions.SET_ADDRESS,
      payload: '123 Fake Street',
    }

    const expected = {
      ...initialState,
      address: action.payload,
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

  it('Responds to SET_FILTERED_CUSTOMERS', () => {
    const action = {
      type: lookupActions.SET_FILTERED_CUSTOMERS,
      payload: [
        'Some',
        'Filtered',
        'Customers',
      ],
    }

    const expected = {
      ...initialState,
      filteredCustomers: action.payload,
    }

    const actual = reducer(initialState, action)
    expect(actual).toEqual(expected)
  })

  it('Responds to SET_NOT_FOUND', () => {
    const action = {
      type: lookupActions.SET_NOT_FOUND,
      payload: true,
    }

    const expected = {
      ...initialState,
      notFound: action.payload,
    }

    const actual = reducer(initialState, action)
    expect(actual).toEqual(expected)
  })

  it('Responds to SET_SELECTED_CUSTOMER', () => {
    const action = {
      type: lookupActions.SET_SELECTED_CUSTOMER,
      payload: { id: 'hi' },
    }

    const expected = {
      ...initialState,
      selectedCustomer: action.payload,
    }

    const actual = reducer(initialState, action)
    expect(actual).toEqual(expected)
  })


  it('Responds to SET_MODE', () => {
    const action = {
      type: lookupActions.SET_MODE,
      payload: 'some mode',
    }

    const expected = {
      ...initialState,
      mode: action.payload,
    }

    const actual = reducer(initialState, action)
    expect(actual).toEqual(expected)
  })
})
