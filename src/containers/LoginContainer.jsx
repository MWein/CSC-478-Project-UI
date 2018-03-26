import Button from 'material-ui/Button'
import ForgotPasswordDialog from '../components/ForgotPasswordDialog'
import Grid from 'material-ui/Grid'
import Paper from 'material-ui/Paper'
import PropTypes from 'prop-types'
import React from 'react'
import TextField from 'material-ui/TextField'
import { connect } from 'react-redux'
import { actions as loginActions } from '../redux/actions/loginActions'

const LoginContainer = ({
  username,
  password,
  setUsername,
  setPassword,
  setForgotPassword,
}) => {
  const paperPadding = '30px'
  const style = {
    paper: {
      width: '300px',
      paddingTop: paperPadding,
      paddingBottom: paperPadding,
      paddingLeft: paperPadding,
      paddingRight: paperPadding,
    },
    textField: {
      width: '100%',
    },
    title: {
      fontSize: 20,
    },
  }

  return (
    <Paper style={style.paper}>
      <ForgotPasswordDialog />
      <div style={style.title}>
        Login
      </div>

      <Grid container>

        <Grid item xs={12}>
          <TextField
            id='name'
            label='Username'
            margin='normal'
            onChange={event => setUsername(event.target.value)}
            style={style.textField}
            value={username}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            autoComplete='current-password'
            id='password-input'
            label='Password'
            margin='normal'
            onChange={event => setPassword(event.target.value)}
            style={style.textField}
            type='password'
            value={password}
          />
        </Grid>

        <Grid item xs={8}>
          <Button
            color='secondary'
            onClick={() => setForgotPassword(true)}
          >
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


LoginContainer.propTypes = {
  password: PropTypes.string.isRequired,
  setForgotPassword: PropTypes.func.isRequired,
  setPassword: PropTypes.func.isRequired,
  setUsername: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
}

const mapStateToProps = state => ({
  username: state.login.username,
  password: state.login.password,
})

const actions = {
  ...loginActions,
}

export default connect(mapStateToProps, actions)(LoginContainer)
