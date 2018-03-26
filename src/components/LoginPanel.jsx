import Button from 'material-ui/Button'
//import Checkbox from 'material-ui/Checkbox'
//import { FormControlLabel } from 'material-ui/Form'
import Paper from 'material-ui/Paper'
import PropTypes from 'prop-types'
import React from 'react'
import TextField from 'material-ui/TextField'
//import { actions as appActions } from '../redux/actions/appActions'
import { connect } from 'react-redux'
import Grid from 'material-ui/Grid'


const LoginPanel = () => {
  const paperPadding = '30px'
  const paddingStyle = {
    width: '300px',
    paddingTop: paperPadding,
    paddingBottom: paperPadding,
    paddingLeft: paperPadding,
    paddingRight: paperPadding,
  }

  const textFieldStyle = {
    width: '100%',
  }

  return (
    <Paper style={paddingStyle}>
      <div style={{ fontSize: 20 }}>
        Login
      </div>

      <Grid container>

        <Grid item xs={12}>
          <TextField
            id='name'
            label='Username'
            margin='normal'
            style={textFieldStyle}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            autoComplete='current-password'
            id='password-input'
            label='Password'
            margin='normal'
            style={textFieldStyle}
            type='password'
          />
        </Grid>

        <Grid item xs={8}>
          <Button color='primary'>
            Forgot Password
          </Button>
        </Grid>

        <Grid item xs={4}>
          <Button color='primary'>
            Login
          </Button>
        </Grid>

      </Grid>
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
