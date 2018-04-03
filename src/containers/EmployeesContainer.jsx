import Button from 'material-ui/Button'
import Grid from 'material-ui/Grid'
import Paper from 'material-ui/Paper'
import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'


const testEmployees = [
  {
    id: 'mawein',
    f_name: 'Mike',
    l_name: 'Weinberg',
    role: 'admin',
    active: true,
    phone: '8675309',
    address: '',
    timestamp: '2018-04-02T18:30:45.669-05:00',
  },
  {
    id: 'superuser',
    f_name: 'Tommy',
    l_name: 'Hubbard',
    role: 'admin',
    active: true,
    phone: null,
    address: null,
    timestamp: '2018-03-25T23:49:17.912-05:00',
  },
  {
    id: 'someGuy',
    f_name: 'Jack',
    l_name: 'Bower',
    role: 'employee',
    active: true,
    phone: '8675309',
    address: '',
    timestamp: '',
  },
  {
    id: 'jas',
    f_name: 'Tommy',
    l_name: 'Hubbard',
    role: 'admin',
    active: true,
    phone: '8675309',
    address: '',
    timestamp: '',
  },
  {
    id: 'bgrimshaw',
    f_name: 'Tommy',
    l_name: 'Hubbard',
    role: 'admin',
    active: true,
    phone: '8675309',
    address: '',
    timestamp: '',
  },
  {
    id: 'rayk',
    f_name: 'Tommy',
    l_name: 'Hubbard',
    role: 'admin',
    active: true,
    phone: '8675309',
    address: '',
    timestamp: '',
  },
  {
    id: 'rayk',
    f_name: 'Tommy',
    l_name: 'Hubbard',
    role: 'admin',
    active: true,
    phone: '8675309',
    address: '',
    timestamp: '',
  },
  {
    id: 'rayk',
    f_name: 'Tommy',
    l_name: 'Hubbard',
    role: 'admin',
    active: true,
    phone: '8675309',
    address: '',
    timestamp: '',
  },
  {
    id: 'rayk',
    f_name: 'Tommy',
    l_name: 'Hubbard',
    role: 'admin',
    active: true,
    phone: '8675309',
    address: '',
    timestamp: '',
  },
  {
    id: 'rayk',
    f_name: 'Tommy',
    l_name: 'Hubbard',
    role: 'admin',
    active: true,
    phone: '8675309',
    address: '',
    timestamp: '',
  },
  {
    id: 'rayk',
    f_name: 'Tommy',
    l_name: 'Hubbard',
    role: 'admin',
    active: true,
    phone: '8675309',
    address: '',
    timestamp: '',
  },
  {
    id: 'rayk',
    f_name: 'Tommy',
    l_name: 'Hubbard',
    role: 'admin',
    active: true,
    phone: '8675309',
    address: '',
    timestamp: '',
  },
  {
    id: 'rayk',
    f_name: 'Tommy',
    l_name: 'Hubbard',
    role: 'admin',
    active: true,
    phone: '8675309',
    address: '',
    timestamp: '',
  },
  {
    id: 'rayk',
    f_name: 'Tommy',
    l_name: 'Hubbard',
    role: 'admin',
    active: true,
    phone: '8675309',
    address: '',
    timestamp: '',
  },
  {
    id: 'rayk',
    f_name: 'Tommy',
    l_name: 'Hubbard',
    role: 'admin',
    active: true,
    phone: '8675309',
    address: '',
    timestamp: '',
  },
  {
    id: 'rayk',
    f_name: 'Tommy',
    l_name: 'Hubbard',
    role: 'admin',
    active: true,
    phone: '8675309',
    address: '',
    timestamp: '',
  },
  {
    id: 'rayk',
    f_name: 'Tommy',
    l_name: 'Hubbard',
    role: 'admin',
    active: true,
    phone: '8675309',
    address: '',
    timestamp: '',
  },
  {
    id: 'rayk',
    f_name: 'Tommy',
    l_name: 'Hubbard',
    role: 'admin',
    active: true,
    phone: '8675309',
    address: '',
    timestamp: '',
  },
  {
    id: 'rayk',
    f_name: 'Tommy',
    l_name: 'Hubbard',
    role: 'admin',
    active: true,
    phone: '8675309',
    address: '',
    timestamp: '',
  },
  {
    id: 'rayk',
    f_name: 'Tommy',
    l_name: 'Hubbard',
    role: 'admin',
    active: true,
    phone: '8675309',
    address: '',
    timestamp: '',
  },
]


const EmployeesContainer = ({
  thisAccountId,
}) => {
  
  const employeeTable = () => {
    const employeesMinusSelf = testEmployees.filter(employee => employee.id !== thisAccountId)

    return employeesMinusSelf.map(employee => {

      return (
        <Grid item key={employee.id} xs={3}>
          <Paper>
            <Grid container>
              <Grid item xs={7}>
                {employee.l_name}, {employee.f_name}
              </Grid>

              <Grid item xs={5}>
                <div style={{ textAlign: 'right' }}>{employee.active ? 'Active' : 'Inactive'}</div>
              </Grid>
            </Grid>


            <div>{employee.role}</div>
            <div>Phone: {employee.phone}</div>

            <div style={{ textAlign: 'right' }}>
            
              <Button
                color='primary'
              >
                Edit
              </Button>

            </div>
          </Paper>
        </Grid>
      )

    })

  }


  return (
    <div>

      Employees<br /><br /><br />

      <Grid container>
        {employeeTable()}
      </Grid>

    </div>
  )
}


EmployeesContainer.propTypes = {
  thisAccountId: PropTypes.string.isRequired,
}

const mapStateToProps = state => ({
  thisAccountId: 'mawein',
})

const actions = {
}

export default connect(mapStateToProps, actions)(EmployeesContainer)
