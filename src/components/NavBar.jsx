import Menu, { MenuItem } from 'material-ui/Menu'
import AppBar from 'material-ui/AppBar'
import Button from 'material-ui/Button'
import PropTypes from 'prop-types'
import React from 'react'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import { connect } from 'react-redux'


const NavBar = () => {
  // const accountMenu = () => (
  //   <Menu
  //     anchorEl={anchorEl}
  //     anchorOrigin={{
  //       vertical: 'top',
  //       horizontal: 'right',
  //     }}
  //     id='menu-appbar'
  //     onClose={this.handleClose}
  //     open={open}
  //     transformOrigin={{
  //       vertical: 'top',
  //       horizontal: 'right',
  //     }}
  //   >
  //     <MenuItem onClick={this.handleClose}>Profile</MenuItem>
  //     <MenuItem onClick={this.handleClose}>My account</MenuItem>
  //   </Menu>
  // )


  return (
    <div>
      <AppBar position='static'>
        <Toolbar>
          <Typography color='inherit' style={{ flex: '1' }} variant='title'>
            LackLuster Video
          </Typography>
          <Button color='inherit'>Account</Button>
        </Toolbar>
      </AppBar>
      <div style={{ width: '100%', height: '10px', backgroundColor: 'red' }} />
    </div>
  )
}


NavBar.propTypes = {
}

const mapStateToProps = state => ({
})

const actions = {
}

export default connect(mapStateToProps, actions)(NavBar)
