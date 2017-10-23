import * as types from '../actionTypes'
import reducer from '../reducer'

describe('Home reducer', () => {
  test('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      projects: []
    })
  })
  
  test('should handle GET_PROJECTS_REQUEST', () => {
    expect(reducer({}, { type: types.GET_PROJECTS_REQUEST })).toEqual({})
  })
  
  test('should handle GET_PROJECTS_SUCCESS', () => {
    const projects = [ { name: 'Project 1' }, { name: 'Project 2'} ]
    expect(
      reducer({}, { 
        type: types.GET_PROJECTS_SUCCESS,
        projects
      })
    ).toEqual({
      projects
    })
  })
  
  test('should handle ADD_PROJECT_REQUEST', () => {
    const project = { name: 'New Project' }
    expect(
      reducer({}, {
        type: types.ADD_PROJECT_REQUEST,
        project
      })
    ).toEqual({})
  })
  
  test('should handle ADD_PROJECT_SUCCESS', () => {
    const project = { name: 'New Project' }
    expect(
      reducer({ projects: [{ name: 'Project 1' }, { name: 'Project 2' }] }, {
        type: types.ADD_PROJECT_SUCCESS,
        project
      })
    ).toEqual({
      projects: [
        { name: 'Project 1' },
        { name: 'Project 2' },
        { name: 'New Project' }
      ]
    })
  })
})