import Button from 'material-ui/Button'
import Checkbox from 'material-ui/Checkbox'
import EditEmployeeDialog from '../components/EditEmployeeDialog'
import { FormControlLabel } from 'material-ui/Form'
import Grid from 'material-ui/Grid'
import Paper from 'material-ui/Paper'
import PropTypes from 'prop-types'
import React from 'react'
import TextField from 'material-ui/TextField'
import { connect } from 'react-redux'
import { actions as editEmployeeActions } from '../redux/actions/editEmployeeActions'
import { actions as employeeActions } from '../redux/actions/employeeActions'
import { humanReadablePhone } from '../redux/selectors'

const EmployeesContainer = ({
  thisAccountId,
  openEmployeeEditor,
  employeeList,
  searchText,
  showInactive,
  setSearchText,
  setShowInactive,
}) => {
  const employeeRoleText = employee => {
    if (employee.active) {
      return employee.id === 'superuser' ? 'Superuser' :
        `${employee.role.charAt(0).toUpperCase()}${employee.role.slice(1)}`
    }

    return (<div style={{ color: 'red' }}>Inactive</div>)
  }

  const employeeGrid = () =>
    employeeList.filter(employee => employee.id !== thisAccountId && employee.id !== 'superuser')
      .filter(employee => {
        if (!showInactive && !employee.active) {
          return false
        }

        if (searchText !== '') {
          const lcSearchText = searchText.toLowerCase()

          return employee.f_name.toLowerCase().includes(lcSearchText) ||
            employee.l_name.toLowerCase().includes(lcSearchText) ||
            employee.address.toLowerCase().includes(lcSearchText) ||
            employee.phone.toLowerCase().includes(lcSearchText)
        }

        return true
      })
      .sort((a, b) => {
        if (a.l_name === b.l_name) {
          return 0
        }

        return a.l_name > b.l_name ? 1 : -1
      })
      .map(employee => (
        <Grid item key={employee.id} xs={3}>
          <Paper style={{ padding: '20px' }}>
            <Grid container>
              <Grid item xs={7}>

                <div style={{ fontSize: '20px' }}>
                  {employee.l_name}, {employee.f_name}
                </div>

              </Grid>

              <Grid item xs={5}>
                <div style={{ textAlign: 'right' }}>
                  {employeeRoleText(employee)}
                </div>
              </Grid>
            </Grid>

            <br />
            <div>Address: {employee.address === '' ? 'No Address Entered' : employee.address}</div>
            <div>Phone: {humanReadablePhone(employee.phone)}</div>

            <div style={{ textAlign: 'right' }}>
              <Button
                color='primary'
                onClick={() => openEmployeeEditor(employee)}
                variant='raised'
              >
                Edit
              </Button>

            </div>
          </Paper>
        </Grid>
      ))


  return (
    <div style={{ flex: '1', justifyContent: 'center', padding: '30px' }}>

      <EditEmployeeDialog />

      <Grid container>
        <Grid item xs={4}>
          <div style={{ fontSize: '25px' }}>
            Employees
          </div>
        </Grid>

        <Grid item xs={5}>
          <Grid container>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label='Search'
                onChange={event => setSearchText(event.target.value)}
                value={searchText}
              />
            </Grid>
            <Grid item xs={6}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={showInactive}
                    onChange={event => setShowInactive(event.target.checked)}
                  />
                }
                label='Show Inactive'
              />
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={3}>
          <div style={{ textAlign: 'right' }}>
            <Button
              color='primary'
              onClick={() => openEmployeeEditor()}
              variant='raised'
            >
              Add New Employee
            </Button>
          </div>
        </Grid>

        {employeeGrid()}
      </Grid>

    </div>
  )
}


EmployeesContainer.propTypes = {
  employeeList: PropTypes.array.isRequired,
  openEmployeeEditor: PropTypes.func.isRequired,
  searchText: PropTypes.string.isRequired,
  setSearchText: PropTypes.func.isRequired,
  setShowInactive: PropTypes.func.isRequired,
  showInactive: PropTypes.bool.isRequired,
  thisAccountId: PropTypes.string.isRequired,
}

const mapStateToProps = state => ({
  thisAccountId: state.app.username,
  employeeList: state.employees.employeeList,
  showInactive: state.employees.showInactive,
  searchText: state.employees.searchText,
})

const actions = {
  ...editEmployeeActions,
  ...employeeActions,
}

export default connect(mapStateToProps, actions)(EmployeesContainer)
