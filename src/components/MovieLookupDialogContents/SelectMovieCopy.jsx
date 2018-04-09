import Button from 'material-ui/Button'
import {
  DialogContent,
} from 'material-ui/Dialog'
import PropTypes from 'prop-types'
import React from 'react'
import TextField from 'material-ui/TextField'
import { connect } from 'react-redux'


const copyList = [
  {
    title: 'Battle of Whatever',
    upc: '123456',
  },
  {
    title: 'Star Wars',
    upc: '987654321',
  },
]


const SelectMovieCopy = () => {
  const copyListTable = () => {
    const copyTable = copyList.map(movie => (
      <Button
        color='primary'
        key={movie.upc}
        style={{ width: '100%' }}
      >
        {movie.title} - {movie.upc}
      </Button>
    ))

    return copyTable.length > 0 ? (
      <div>
        {copyTable}
      </div>
    ) :
      (
        <div>
          {notFound ? (<div><div style={{ color: 'red' }}>Movie Not Found</div><br /></div>) : null}
        </div>
      )
  }


  return (
    <div>
      <DialogContent>

        <div style={{ flex: '1', textAlign: 'center' }}>
          <TextField
            label='New Movie Copy'
          />

          &nbsp;&nbsp;

          <Button variant='raised'>
            Create
          </Button>

        </div>

        <br /><br />
        {copyListTable()}

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
