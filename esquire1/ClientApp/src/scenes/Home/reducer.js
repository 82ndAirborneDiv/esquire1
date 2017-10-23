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
    case types.GET_MONGOPROJECTS_SUCCESS:
      return {
        ...state,
        mongoProjects: action.projects
      }

    case types.GET_MONGOPROJECTS_REQUEST:
      return state

    case types.GET_PROJECTS_REQUEST:
      return state

    case types.ADD_PROJECT_REQUEST:
      return state

    case types.ADD_PROJECT_SUCCESS:
      return {
        ...state,
        projects: [...state.projects, action.project]
      }

    case types.ADD_MONGOPROJECT_SUCCESS:
      return {
        ...state,
        mongoProjects: [...state.mongoProjects, action.project]
      }
    default:
      return state
  }
}
