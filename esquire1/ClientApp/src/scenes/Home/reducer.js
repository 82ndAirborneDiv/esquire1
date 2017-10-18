import * as types from './actionTypes'

export default function homeReducer(state = {}, action) {
  switch(action.type) {
    case types.GET_PROJECTS_SUCCESS:
      return {
        ...state,
        projects: action.projects
      }
    case types.GET_PROJECTS_REQUEST:
      return state
    default:
      return state
  }
}
