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
  changeSecurityQuestion,
  securityQuestionChangeSuccess,
  setSecurityQuestionChangeSuccess,
}) => {
  const paperPadding = '30px'
  const style = {
    paper: {
      paddingTop: paperPadding,
      paddingBottom: paperPadding,
      paddingLeft: paperPadding,
      paddingRight: paperPadding,
    },
    title: {
      fontSize: 20,
    },
  }

  const header = () => (
    <div>
      Security Question {securityQuestionChangeSuccess ? (<span style={{ color: 'green' }}>- Success</span>) : ''}
    </div>
  )

  const typeQuestion = value => {
    setSecurityQuestionChangeSuccess(false)
    setSecurityQuestion(value)
  }

  const typeAnswer = value => {
    setSecurityQuestionChangeSuccess(false)
    setSecurityAnswer(value)
  }

  const validate = () => securityQuestion !== '' && securityAnswer !== ''

  return (
    <Paper style={style.paper}>
      <Grid container>
        <Grid item xs={12}>
          <div style={style.title}>
            {header()}
          </div>
        </Grid>

        <Grid item xs={12}>
          <TextField
            fullWidth
            label='Security Question'
            onChange={event => typeQuestion(event.target.value)}
            value={securityQuestion}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            fullWidth
            label='Security Answer'
            onChange={event => typeAnswer(event.target.value)}
            value={securityAnswer}
          />
        </Grid>

        <Grid item xs={12}>
          <div style={{ width: '100%', textAlign: 'right' }}>
            <Button
              color='primary'
              disabled={!validate()}
              onClick={changeSecurityQuestion}
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
  changeSecurityQuestion: PropTypes.func.isRequired,
  securityAnswer: PropTypes.string.isRequired,
  securityQuestion: PropTypes.string.isRequired,
  securityQuestionChangeSuccess: PropTypes.bool.isRequired,
  setSecurityAnswer: PropTypes.func.isRequired,
  setSecurityQuestion: PropTypes.func.isRequired,
  setSecurityQuestionChangeSuccess: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  securityQuestion: state.settings.securityQuestion,
  securityAnswer: state.settings.securityAnswer,
  securityQuestionChangeSuccess: state.settings.securityQuestionChangeSuccess,
})

const actions = {
  ...settingsActions,
}

export default connect(mapStateToProps, actions)(SetSecurityQuestion)
