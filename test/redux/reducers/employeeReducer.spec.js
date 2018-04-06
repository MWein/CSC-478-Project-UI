import { constants as employeeActions } from '../../../src/redux/actions/employeeActions'
import reducer from '../../../src/redux/reducers/employeeReducer'


const initialState = {
  employeeList: [],
  searchText: '',
  showInactive: false,
}


describe('Employee reducer spec', () => {
  it('Exports the default state', () => {
    const actual = reducer()
    expect(actual).toEqual(initialState)
  })

  it('Responds to SET_EMPLOYEE_LIST', () => {
    const action = {
      type: employeeActions.SET_EMPLOYEE_LIST,
      payload: [ 'Some', 'List', 'of', 'Employees' ],
    }

    const expected = {
      ...initialState,
      employeeList: action.payload,
    }

    const actual = reducer(initialState, action)
    expect(actual).toEqual(expected)
  })

  it('Responds to SET_SEARCH_TEXT', () => {
    const action = {
      type: employeeActions.SET_SEARCH_TEXT,
      payload: 'waldo',
    }

    const expected = {
      ...initialState,
      searchText: action.payload,
    }

    const actual = reducer(initialState, action)
    expect(actual).toEqual(expected)
  })

  it('Responds to SET_SHOW_INACTIVE', () => {
    const action = {
      type: employeeActions.SET_SHOW_INACTIVE,
      payload: true,
    }

    const expected = {
      ...initialState,
      showInactive: action.payload,
    }

    const actual = reducer(initialState, action)
    expect(actual).toEqual(expected)
  })
})
