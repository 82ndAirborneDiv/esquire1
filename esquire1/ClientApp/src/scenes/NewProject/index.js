import React, { Component } from 'react'
import Grid from 'material-ui/Grid'

class NewProject extends Component {
  constructor(props, context) {
    super(props, context)
  }

  componentWillMount() {
  }

  render() {
    return (
      <Grid container direction="column">
        <Grid item>
          <h1>This is the New Project scene</h1>
        </Grid>
      </Grid>
    );
  }
}

export default NewProject
