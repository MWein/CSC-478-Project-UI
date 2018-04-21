import Button from 'material-ui/Button'
import {
  DialogContent,
} from 'material-ui/Dialog'
import Grid from 'material-ui/Grid'
import PropTypes from 'prop-types'
import React from 'react'
import TextField from 'material-ui/TextField'
import { connect } from 'react-redux'
import { actions as movieLookupActions } from '../../redux/actions/movieLookupActions'


const SelectMovieCopy = () => {

  return (
    <div style={{ width: '500px' }}>
      <DialogContent>

        <div style={{ flex: '1', textAlign: 'center' }}>

          <Grid container>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label='Title - Required'
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label='UPC - Required'
              />
            </Grid>

          </Grid>

        </div>

      </DialogContent>
    </div>
  )
}


SelectMovieCopy.propTypes = {
}

const mapStateToProps = state => ({
})


const actions = {
}

export default connect(mapStateToProps, actions)(SelectMovieCopy)
