//import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'


const ReportsContainer = () => {
  console.log('TODO: Employees Page')

  return (
    <div style={{ display: 'flex', justifyContent: 'center', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', position: 'absolute' }}>
      Reports Page
    </div>
  )
}


ReportsContainer.propTypes = {
}

const mapStateToProps = state => ({
})

const actions = {
}

export default connect(mapStateToProps, actions)(ReportsContainer)
