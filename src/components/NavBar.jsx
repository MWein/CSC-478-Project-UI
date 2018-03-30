import AppBar from 'material-ui/AppBar'
import Button from 'material-ui/Button'
import IconButton from 'material-ui/IconButton'
import MenuIcon from 'material-ui-icons/Menu'
import PropTypes from 'prop-types'
import React from 'react'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import { connect } from 'react-redux'


const NavBar = () => {


  return (
    <AppBar position='static'>
      <Toolbar>
        <IconButton color='inherit' aria-label='Menu'>
          <MenuIcon />
        </IconButton>
        <Typography variant='title' color='inherit'>
          Title
        </Typography>
        <Button color='inherit'>Login</Button>
      </Toolbar>
    </AppBar>
  )
}


NavBar.propTypes = {
}

const mapStateToProps = state => ({
})

const actions = {
}

export default connect(mapStateToProps, actions)(NavBar)
