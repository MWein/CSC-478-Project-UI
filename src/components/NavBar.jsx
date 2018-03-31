import Menu, { MenuItem } from 'material-ui/Menu'
import AppBar from 'material-ui/AppBar'
import Button from 'material-ui/Button'
import PropTypes from 'prop-types'
import React from 'react'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import { connect } from 'react-redux'
import { actions as navBarActions } from '../redux/actions/navBarActions'

const NavBar = ({
  userRole,
  accountMenuOpen,
  setMenuOpen,
}) => {
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
      <MenuItem>Settings</MenuItem>
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


  const reportsButton = () => userRole === 'admin' || userRole === 'manager' ?
    (<Button color='inherit'>Reports</Button>) : null


  const userNameAndRole = () => {
    const name = 'Derrick Zoolander'
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

          {reportsButton()}

          <Button
            color='inherit'
          >
            Transaction
          </Button>

          <Button
            color='inherit'
            onClick={() => setMenuOpen(!accountMenuOpen)}
          >
            Account
          </Button>

          {accountMenu()}
        </Toolbar>
      </AppBar>
      <div style={{ width: '100%', height: '10px', backgroundColor: accountTypeColor() }} />
    </div>
  )
}


NavBar.propTypes = {
  accountMenuOpen: PropTypes.bool.isRequired,
  setMenuOpen: PropTypes.func.isRequired,
  userRole: PropTypes.string.isRequired,
}

const mapStateToProps = state => ({
  accountMenuOpen: state.navBar.menuOpen,
  userRole: state.app.role,
})

const actions = {
  ...navBarActions,
}

export default connect(mapStateToProps, actions)(NavBar)
