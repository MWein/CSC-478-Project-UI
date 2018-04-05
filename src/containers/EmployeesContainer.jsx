import Button from 'material-ui/Button'
//import Checkbox from 'material-ui/Checkbox'
//import { FormControlLabel } from 'material-ui/Form'
import EditEmployeeDialog from '../components/EditEmployeeDialog'
import Grid from 'material-ui/Grid'
import Paper from 'material-ui/Paper'
import PropTypes from 'prop-types'
import React from 'react'
//import TextField from 'material-ui/TextField'
import { connect } from 'react-redux'
import { actions as editEmployeeActions } from '../redux/actions/editEmployeeActions'


const EmployeesContainer = ({
  thisAccountId,
  openEmployeeEditor,
  employeeList,
}) => {
  const employeeRoleText = employee => {
    if (employee.active) {
      return employee.id === 'superuser' ? 'Superuser' :
        `${employee.role.charAt(0).toUpperCase()}${employee.role.slice(1)}`
    }

    return (<div style={{ color: 'red' }}>Inactive</div>)
  }

  const employeeGrid = () =>
    employeeList.filter(employee => employee.id !== thisAccountId)
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
            <div>Phone: {employee.phone}</div>

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
        <Grid item xs={7}>
          <div style={{ fontSize: '25px' }}>
            Employees
          </div>
        </Grid>

        {/* <Grid item xs={3}>
          <Grid container>
            <Grid item xs={7}>
              <TextField label='Search' />
            </Grid>
            <Grid item xs={5}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked
                  />
                }
                label='Active Only'
              />
            </Grid>
          </Grid>
        </Grid> */}

        <Grid item xs={5}>
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
  thisAccountId: PropTypes.string.isRequired,
}

const mapStateToProps = state => ({
  thisAccountId: 'mawein',
  employeeList: state.employees.employeeList,
})

const actions = {
  ...editEmployeeActions,
}

export default connect(mapStateToProps, actions)(EmployeesContainer)
