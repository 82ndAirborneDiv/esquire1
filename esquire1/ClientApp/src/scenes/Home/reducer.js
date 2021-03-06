import * as types from './actionTypes'

const INITIAL_STATE = {
  projects: [],
  mongoProjects: []
}

export default function homeReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.GET_PROJECTS_SUCCESS:
      return {
        ...state,
        projects: action.projects
      }

    case types.GET_PROJECTS_REQUEST:
      return state

    case types.ADD_PROJECT_REQUEST:
      return state

    case types.ADD_PROJECT_SUCCESS:
      return {
        ...state,
        projects: [...state.projects, action.project]
      }
      
    default:
      return state
  }
}
