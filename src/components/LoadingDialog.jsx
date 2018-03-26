import Dialog, { DialogContent } from 'material-ui/Dialog'
import { CircularProgress } from 'material-ui/Progress'
import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'


const LoadingDialog = ({
  loading,
}) => (
  <Dialog
    aria-labelledby='form-dialog-title'
    open={loading > 0}
  >
    <DialogContent>
      <CircularProgress size={50} />
    </DialogContent>
  </Dialog>
)


LoadingDialog.propTypes = {
  loading: PropTypes.number.isRequired,
}

const mapStateToProps = state => ({
  loading: state.app.loading,
})

export default connect(mapStateToProps)(LoadingDialog)
