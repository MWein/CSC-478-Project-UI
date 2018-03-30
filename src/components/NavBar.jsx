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
      <div style={{ width: '100%', height: '10px', backgroundColor: 'red' }} />
    </div>
  )
}


NavBar.propTypes = {
  accountMenuOpen: PropTypes.bool.isRequired,
  setMenuOpen: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  accountMenuOpen: state.navBar.menuOpen,
})

const actions = {
  ...navBarActions,
}

export default connect(mapStateToProps, actions)(NavBar)
