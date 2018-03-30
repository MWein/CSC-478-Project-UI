import Button from 'material-ui/Button'
import Grid from 'material-ui/Grid'
import Paper from 'material-ui/Paper'
import PropTypes from 'prop-types'
import React from 'react'
import TextField from 'material-ui/TextField'
import { connect } from 'react-redux'
import { actions as settingsActions } from '../redux/actions/UserSettingsActions'


const SetSecurityQuestion = ({
  securityQuestion,
  securityAnswer,
  setSecurityQuestion,
  setSecurityAnswer,
}) => {
  const paperPadding = '30px'
  const style = {
    paper: {
      width: '350px',
      paddingTop: paperPadding,
      paddingBottom: paperPadding,
      paddingLeft: paperPadding,
      paddingRight: paperPadding,
    },
    title: {
      fontSize: 20,
    },
  }

  const validate = () => securityQuestion !== '' && securityAnswer !== ''

  return (
    <Paper style={style.paper}>
      <Grid container>
        <Grid item xs={12}>
          <div style={style.title}>
            Security Question
          </div>
        </Grid>

        <Grid item xs={12}>
          <TextField
            fullWidth
            label='Security Question'
            onChange={event => setSecurityQuestion(event.target.value)}
            value={securityQuestion}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            fullWidth
            label='Security Answer'
            onChange={event => setSecurityAnswer(event.target.value)}
            type='password'
            value={securityAnswer}
          />
        </Grid>

        <Grid item xs={12}>
          <div style={{ width: '100%', textAlign: 'right' }}>
            <Button
              color='primary'
              disabled={!validate()}
              onClick={() => console.log('Run the saga')}
              variant='raised'
            >
                Submit
            </Button>
          </div>
        </Grid>
      </Grid>
    </Paper>
  )
}


SetSecurityQuestion.propTypes = {
  securityAnswer: PropTypes.string.isRequired,
  securityQuestion: PropTypes.string.isRequired,
  setSecurityAnswer: PropTypes.func.isRequired,
  setSecurityQuestion: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  securityQuestion: state.settings.securityQuestion,
  securityAnswer: state.settings.securityAnswer,
})

const actions = {
  ...settingsActions,
}

export default connect(mapStateToProps, actions)(SetSecurityQuestion)
