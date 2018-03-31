import createActions from './helpers/createActions'

export const {
  constants,
  actions,
} = createActions('navBar', {
  setNavEnabled: 'SET_NAV_ENABLED',
  setMenuOpen: 'SET_MENU_OPEN',
})
