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
      project: { name: '' },
      mongoProject: { body: '' }
    }

    this.onProjectChange = this.onProjectChange.bind(this)
    this.onMongoProjectChange = this.onMongoProjectChange.bind(this)
    this.addNewProject = this.addNewProject.bind(this)
    this.addNewMongoProject = this.addNewMongoProject.bind(this)
  }

  componentWillMount() {
    this.props.actions.getProjectsRequest()
    this.props.actions.getMongoProjectsRequest()
  }

  onProjectChange(event) {
    const field = event.target.name
    let project = { ...this.state.project }
    project[field] = event.target.value
    return this.setState({ project })
  }

  onMongoProjectChange(event) {
    const field = event.target.name
    let mongoProject = { ...this.state.mongoProject }
    mongoProject[field] = event.target.value
    return this.setState({ mongoProject })
  }

  addNewProject() {
    this.props.actions.addProjectRequest(this.state.project)
    let project = { name: '' }
    this.setState({ project })
  }

  addNewMongoProject() {
    this.props.actions.addMongoProjectRequest(this.state.mongoProject)
    let mongoProject = { body: '' }
    this.setState({ mongoProject })
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
            {this.props.projects.map(project => <li key={project.name}>{project.name}</li>)}
          </ul>
        </Grid>
        <Grid item>
          <TextInput placeholder="Enter project name" name="name" value={this.state.project.name} label="Project name" onChange={this.onProjectChange} />
          <MainButton color="primary" value="Add project" onClick={this.addNewProject} />
        </Grid>
        <Grid item>
          <h4>Pulled from MongoDB:</h4>
          <ul>
            {this.props.mongoProjects.map((mongoProject, i) => <li key={i}>{mongoProject.body}</li>)}
          </ul>
        </Grid>
        <Grid item>
          <TextInput placeholder="Enter mongo project name" name="body" value={this.state.mongoProject.body} label="Mongo project name" onChange={this.onMongoProjectChange} />
          <MainButton color="primary" value="Add mongo project" onClick={this.addNewMongoProject} />
        </Grid>
      </Grid>
    );
  }
}

const mapStateToProps = (state) => ({ projects: state.scenes.home.projects || [], mongoProjects: state.scenes.home.mongoProjects || [] })
const mapDispatchToProps = (dispatch) => ({ actions: bindActionCreators(actions, dispatch) })

export default connect(mapStateToProps, mapDispatchToProps)(Home)
