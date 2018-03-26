import Button from 'material-ui/Button'
import Grid from 'material-ui/Grid'
import Paper from 'material-ui/Paper'
import PropTypes from 'prop-types'
import React from 'react'
import TextField from 'material-ui/TextField'
import { connect } from 'react-redux'


const LoginPanel = () => {
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
      <div style={style.title}>
        Login
      </div>

      <Grid container>

        <Grid item xs={12}>
          <TextField
            id='name'
            label='Username'
            margin='normal'
            style={style.textField}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            autoComplete='current-password'
            id='password-input'
            label='Password'
            margin='normal'
            style={style.textField}
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
