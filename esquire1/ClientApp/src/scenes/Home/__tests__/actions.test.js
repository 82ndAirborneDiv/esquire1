import * as actions from '../actions'
import * as types from '../actionTypes'

describe('Home actions creators', () => {
  test('should create an action to get projects', () => {
    const expectedAction = {
      type: types.GET_PROJECTS_REQUEST,
    }
    expect(actions.getProjectsRequest()).toEqual(expectedAction)
  })
  
  test('should create an action to indicate getting projects was successful', () => {
    const projects = [{ name: 'Project 1' }]
    const expectedAction = {
      type: types.GET_PROJECTS_SUCCESS,
      projects
    }
    
    expect(actions.getProjectsSuccess(projects)).toEqual(expectedAction)
  })
  
  test('should create an action to add a project', () => {
    const project = { name: 'New Project' }
    const expectedAction = {
      type: types.ADD_PROJECT_REQUEST,
      project
    }
    
    expect(actions.addProjectRequest(project)).toEqual(expectedAction)
  })

  test('should create an action indiciated add project was successful', () => {
    const project = { name: 'New Project' }
    const expectedAction = {
      type: types.ADD_PROJECT_SUCCESS,
      project
    }

    expect(actions.addProjectSuccess(project)).toEqual(expectedAction)
  })
})