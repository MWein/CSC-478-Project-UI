import Button from 'material-ui/Button'
import {
  DialogContent,
} from 'material-ui/Dialog'
import PropTypes from 'prop-types'
import React from 'react'
import TextField from 'material-ui/TextField'
import { connect } from 'react-redux'
import { actions as movieLookupActions } from '../../redux/actions/movieLookupActions'


const copyList = [
  '456789',
  '987654',
  '111111',
]


const SelectMovieCopy = ({
  newMovieCopy,
  setNewMovieCopy,
  selectedCopy,
  setSelectedCopy,
}) => {
  const copyListTable = () => {
    const copyTable = copyList.map(copy => (
      <Button
        color='primary'
        key={copy}
        onClick={() => setSelectedCopy(copy)}
        style={{ width: '100%' }}
        variant={copy === selectedCopy ? 'raised' : 'flat'}
      >
        {copy}
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
            onChange={event => setNewMovieCopy(event.target.value)}
            value={newMovieCopy}
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
  newMovieCopy: PropTypes.string.isRequired,
  selectedCopy: PropTypes.string.isRequired,
  setNewMovieCopy: PropTypes.func.isRequired,
  setSelectedCopy: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  newMovieCopy: state.movieLookup.newMovieCopy,
  selectedCopy: state.movieLookup.selectedCopy,
})


const actions = {
  ...movieLookupActions,
}

export default connect(mapStateToProps, actions)(SelectMovieCopy)
