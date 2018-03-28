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
  login,
  username,
  password,
  loginError,
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
    title: {
      fontSize: 20,
    },
  }

  const loginHeader = () => (
    <div style={loginError ? { ...style.title, color: 'red' } : style.title}>
        Login {loginError ? ' - Invalid Credentials' : ''}
    </div>
  )

  return (
    <Paper style={style.paper}>
      <ForgotPasswordDialog />
      {loginHeader()}

      <Grid container>

        <Grid item xs={12}>
          <TextField
            fullWidth
            id='name'
            label='Username'
            margin='normal'
            onChange={event => setUsername(event.target.value)}
            value={username}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            autoComplete='current-password'
            fullWidth
            id='password-input'
            label='Password'
            margin='normal'
            onChange={event => setPassword(event.target.value)}
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
          <Button
            color='primary'
            disabled={username === '' || password === ''}
            onClick={login}
          >
            Login
          </Button>
        </Grid>

      </Grid>
    </Paper>
  )
}


LoginContainer.propTypes = {
  login: PropTypes.func.isRequired,
  loginError: PropTypes.bool.isRequired,
  password: PropTypes.string.isRequired,
  setForgotPassword: PropTypes.func.isRequired,
  setPassword: PropTypes.func.isRequired,
  setUsername: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
}

const mapStateToProps = state => ({
  username: state.login.username,
  password: state.login.password,
  loginError: state.login.loginError,
})

const actions = {
  ...loginActions,
}

export default connect(mapStateToProps, actions)(LoginContainer)
