import Menu, { MenuItem } from 'material-ui/Menu'
import AppBar from 'material-ui/AppBar'
import Button from 'material-ui/Button'
import PropTypes from 'prop-types'
import React from 'react'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import { actions as appActions } from '../redux/actions/appActions'
import { connect } from 'react-redux'
import { actions as navBarActions } from '../redux/actions/navBarActions'

const NavBar = ({
  setPage,
  enabled,
  userRole,
  firstName,
  lastName,
  accountMenuOpen,
  setMenuOpen,
}) => {
  const navigate = page => {
    setPage(page)
    setMenuOpen(false)
  }

  const accountMenu = () => (
    <Menu
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id='menu-appbar'
      onClose={() => setMenuOpen(false)}
      open={accountMenuOpen}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
    >
      <MenuItem
        onClick={() => navigate('settings')}
      >
        Settings
      </MenuItem>
      <MenuItem>Logout</MenuItem>
    </Menu>
  )

  const accountTypeColor = () => {
    switch (userRole) {
      // Yellow
      case 'admin': return '#EBE337'

      // Red
      case 'manager': return '#ED4444'

      // Blue
      case 'employee': return '#00AAFF'
      default: return ''
    }
  }


  const adminButtons = () =>
    userRole === 'admin' || userRole === 'manager' ?
      (
        <div>
          <Button color='inherit' disabled={!enabled}>Employees</Button>
          <Button color='inherit' disabled={!enabled}>Reports</Button>
        </div>
      ) : null


  const employeeButtons = () =>
    userRole === 'admin' || userRole === 'manager' || userRole === 'employee' ?
      (
        <div>
          <Button color='inherit' disabled={!enabled}>Transaction</Button>
          <Button
            color='inherit'
            disabled={!enabled}
            onClick={() => setMenuOpen(!accountMenuOpen)}
          >
            Account
          </Button>
        </div>
      ) : null


  const userNameAndRole = () => {
    const name = `${firstName} ${lastName}`
    const role = userRole === '' ? '' :
      ` - ${userRole.charAt(0).toUpperCase()}${userRole.slice(1)}`

    return `${name}${role}`
  }


  return (
    <div>
      <AppBar position='static'>
        <Toolbar>
          <Typography color='inherit' style={{ flex: '1' }} variant='title'>
            LackLuster Video
          </Typography>

          <Typography color='inherit' style={{ flex: '1' }} variant='title'>
            {userNameAndRole()}
          </Typography>

          {adminButtons()}
          {employeeButtons()}
          {accountMenu()}

        </Toolbar>
      </AppBar>
      <div style={{ width: '100%', height: '10px', backgroundColor: accountTypeColor() }} />
    </div>
  )
}


NavBar.propTypes = {
  accountMenuOpen: PropTypes.bool.isRequired,
  enabled: PropTypes.bool.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  setMenuOpen: PropTypes.func.isRequired,
  setPage: PropTypes.func.isRequired,
  userRole: PropTypes.string.isRequired,
}

const mapStateToProps = state => ({
  accountMenuOpen: state.navBar.menuOpen,
  userRole: state.app.role,
  enabled: state.navBar.enabled,
  firstName: state.app.firstName,
  lastName: state.app.lastName,
})

const actions = {
  ...appActions,
  ...navBarActions,
}

export default connect(mapStateToProps, actions)(NavBar)
