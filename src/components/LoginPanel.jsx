//import Button from 'material-ui/Button'
//import Checkbox from 'material-ui/Checkbox'
//import { FormControlLabel } from 'material-ui/Form'
import Paper from 'material-ui/Paper'
import PropTypes from 'prop-types'
import React from 'react'
//import TextField from 'material-ui/TextField'
//import Typography from 'material-ui/Typography'
//import { actions as appActions } from '../redux/actions/appActions'
import { connect } from 'react-redux'

const LoginPanel = () => {
  const paperPadding = '10px'
  const paddingStyle = {
    paddingTop: paperPadding,
    paddingBottom: paperPadding,
    paddingLeft: paperPadding,
    paddingRight: paperPadding,
  }

  return (
    <Paper style={paddingStyle}>
      Login
    </Paper>
  )
}


LoginPanel.propTypes = {
}

const mapStateToProps = state => ({
})

const actions = {
}

export default connect(mapStateToProps, actions)(LoginPanel)
