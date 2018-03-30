import Button from 'material-ui/Button'
import Grid from 'material-ui/Grid'
import Paper from 'material-ui/Paper'
import PropTypes from 'prop-types'
import React from 'react'
import TextField from 'material-ui/TextField'
import { connect } from 'react-redux'


const SetSecurityQuestion = () => {
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

  return (
    <Paper style={style.paper}>
      <Grid container>
        <Grid item xs={12}>
          <div style={style.title}>
              Password Recovery
          </div>
        </Grid>

        <Grid item xs={12}>
          <TextField
            fullWidth
            label='Security Question'
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            fullWidth
            label='Security Answer'
          />
        </Grid>

        <Grid item xs={12}>
          <div style={{ width: '100%', textAlign: 'right' }}>
            <Button
              color='primary'
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
}

const mapStateToProps = state => ({
})

export default connect(mapStateToProps)(SetSecurityQuestion)
