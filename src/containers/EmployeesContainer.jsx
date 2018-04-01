//import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'


const EmployeesContainer = () => {
  console.log('TODO: Employees Page')

  return (
    <div>
      Employees Page
    </div>
  )
}


EmployeesContainer.propTypes = {
}

const mapStateToProps = state => ({
})

const actions = {
}

export default connect(mapStateToProps, actions)(EmployeesContainer)
