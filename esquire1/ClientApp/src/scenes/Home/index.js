import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import * as actions from './actions'
import MainButton from 'components/Button'
import Grid from 'material-ui/Grid'

class Home extends Component {
  constructor(props, context) {
    super(props, context)
  }

  componentWillMount() {
    this.props.actions.getProjectsRequest()
  }

  render() {
    return (
      <Grid container direction="column">
        <Grid item>
          <h1>This is the home scene</h1>
        </Grid>
        <Grid item>
          <h4>Pulled from SQL Server:</h4>
          <ul>
            { this.props.projects.map(project => <li key={project.name}>{project.name}</li>) }
          </ul>
        </Grid>
        <Grid item>
          <Link to="/new/project"><MainButton value="new project" color="primary"/></Link>
        </Grid>
      </Grid>
    );
  }
}

const mapStateToProps = (state) => ({ projects: state.scenes.home.projects || [] })
const mapDispatchToProps = (dispatch) => ({ actions: bindActionCreators(actions, dispatch) })


export default connect(mapStateToProps, mapDispatchToProps)(Home)
