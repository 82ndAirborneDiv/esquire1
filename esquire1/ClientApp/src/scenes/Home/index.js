import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import * as actions from './actions'
import MainButton from 'components/Button'
import TextInput from 'components/TextInput'
import Grid from 'material-ui/Grid'

export class Home extends Component {
  constructor(props, context) {
    super(props, context)
    
    this.state = {
      project: { name: '' }
    }
    
    this.onProjectChange = this.onProjectChange.bind(this)
    this.addNewProject = this.addNewProject.bind(this)
  }

  componentWillMount() {
    this.props.actions.getProjectsRequest()
  }
  
  onProjectChange(event) {
    const field = event.target.name
    let project = { ...this.state.project }
    project[field] = event.target.value
    return this.setState({ project })
  }
  
  addNewProject() { 
    this.props.actions.addProjectRequest(this.state.project)
    let project = { name: '' }
    this.setState({ project })
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
          <TextInput placeholder="Enter project name" name="name" value={this.state.project.name} label="Project name" onChange={this.onProjectChange} />
          <MainButton color="primary" value="Add project" onClick={this.addNewProject} />
        </Grid>
      </Grid>
    );
  }
}

const mapStateToProps = (state) => ({ projects: state.scenes.home.projects || [] })
const mapDispatchToProps = (dispatch) => ({ actions: bindActionCreators(actions, dispatch) })

export default connect(mapStateToProps, mapDispatchToProps)(Home)
