//import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'


const ReturnContainer = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', position: 'absolute' }}>
      Returns Page
    </div>
  )
}


ReturnContainer.propTypes = {
}

const mapStateToProps = state => ({
})

const actions = {
}

export default connect(mapStateToProps, actions)(ReturnContainer)
