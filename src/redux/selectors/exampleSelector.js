import {
  getAddRowAgency,
  getAddRowEventId,
  getAllData,
} from './index'
import { createSelector } from 'reselect'


const validateAddRowForm = createSelector(
  [ getAddRowAgency, getAddRowEventId, getAllData ],
  (getAddRowAgency, getAddRowEventId, getAllData) => {
    if (getAddRowAgency === '' || getAddRowEventId === '') {
      return false
    }

    const match = getAllData.find(
      row => row.event_id === getAddRowEventId && row.agency_code === getAddRowAgency
    )

    return match === undefined
  }
)

export default validateAddRowForm
