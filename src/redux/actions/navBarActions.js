import createActions from './helpers/createActions'

export const {
  constants,
  actions,
} = createActions('navBar', {
  setMenuOpen: 'SET_MENU_OPEN',
})
