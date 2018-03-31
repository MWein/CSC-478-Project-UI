import { constants as appActions } from '../../../src/redux/actions/navBarActions'
import reducer from '../../../src/redux/reducers/navBarReducer'


const initialState = {
  enabled: false,
  menuOpen: false,
}


describe('Nav bar reducer spec', () => {
  it('Exports the default state', () => {
    const actual = reducer()
    expect(actual).toEqual(initialState)
  })

  it('Responds to SET_MENU_OPEN', () => {
    const action = {
      type: appActions.SET_MENU_OPEN,
      payload: true,
    }

    const expected = {
      ...initialState,
      menuOpen: action.payload,
    }

    const actual = reducer(initialState, action)
    expect(actual).toEqual(expected)
  })

  it('Responds to SET_NAV_ENABLED', () => {
    const action = {
      type: appActions.SET_NAV_ENABLED,
      payload: true,
    }

    const expected = {
      ...initialState,
      enabled: action.payload,
    }

    const actual = reducer(initialState, action)
    expect(actual).toEqual(expected)
  })
})
