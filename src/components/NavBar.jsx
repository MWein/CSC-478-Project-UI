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
      <MenuItem>Profile</MenuItem>
      <MenuItem>My account</MenuItem>
    </Menu>
  )

  const accountTypeColor = () => {
    switch (userRole) {
      case 'admin': return '#EBE337' // Yellow
      case 'manager': return '#ED4444' // Red
      case 'employee': return '#00AAFF' // Blue
      default: return ''
    }
  }

  return (
    <div>
      <AppBar position='static'>
        <Toolbar>
          <Typography color='inherit' style={{ flex: '1' }} variant='title'>
            LackLuster Video
          </Typography>
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
