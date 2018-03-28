import Button from 'material-ui/Button'
import ForgotPasswordDialog from '../components/ForgotPasswordDialog'
import Grid from 'material-ui/Grid'
import Paper from 'material-ui/Paper'
import PropTypes from 'prop-types'
import React from 'react'
import TextField from 'material-ui/TextField'
import { connect } from 'react-redux'

const TransactionContainer = () => {

  // This is JSS, Javascript Style Sheets
  // Its just CSS, really, but in JSON format
  // font-size in CSS, fontSize in JSS

  const paperPadding = '30px'
  const style = {
    paper: {
      width: '300px',
      paddingTop: paperPadding,
      paddingBottom: paperPadding,
      paddingLeft: paperPadding,
      paddingRight: paperPadding,
    },
    textField: {
      width: '100%',
    },
    title: {
      fontSize: 20,
    },
  }


  const exampleFunction = () => {
    return 'Transaction Container Under Construction'
  }
  
  
  // React code goes below. As you can see, it is exactly like HTML except for material-ui components
  // Documentation can be found here https://material-ui-next.com/demos/buttons/

  // I am trying to use material-ui almost exclusively, because it works natively with Redux
  // material-ui comes with buttons, text fields, dropdown menus, etc

  // The picture I posted is what I had in mind for this page
  // This is where the employee will do a customer lookup, punch in the movie IDs, and checkout

  // The customer button will show a modal, CustomerLookupDialog, which will show a list of customers against a phone number or last name. Don't worry about that now

  // The movie copy text field is where the movie copy is entered. There should be a button next to it that say "Lookup" or something.
  // That button will display another dialog showing the movie information, this will be confirmed as the correct movie by the employee

  // After the employee confirms the movie, the list on the bottom of the picture will show the movie title and the price. DOn't worry about this now, this is a list object and I'm
  // Saving that for later. Its a little more complicated in React so I'm going to write something up to show you a little later

  // Finally, there should be a summary section at the bottom. It should show the total price, the due date, and a button "Submit" that sends the transaction to the API

  // Unless youre so inclined do not worry about making anything functional. Just put the buttons and the text fields down where they look good. Everything should be inside the <Paper>
  // Elements (React return only allows for a single object)

  // P.S. Outside functions can be called inside of the React code by using brackets, as shown by {exampleFunction()}

  return (
    <Paper style={style.paper}>
      {exampleFunction()}
    </Paper>
  )
}

// Don't worry about the things below this line, for now


TransactionContainer.propTypes = {
}

const mapStateToProps = state => ({
})

const actions = {
}

export default connect(mapStateToProps, actions)(TransactionContainer)
