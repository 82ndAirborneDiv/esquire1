import * as actions from '../actions'
import * as types from '../actionTypes'

describe('Home actions', () => {
  test('should create an action to get projects', () => {
    const expectedAction = {
      type: types.GET_PROJECTS_REQUEST
    }
    expect(actions.getProjectsRequest()).toEqual(expectedAction)
  })
})