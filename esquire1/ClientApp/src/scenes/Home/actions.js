import * as types from './actionTypes'

export const getProjectsRequest = () => ({ type: types.GET_PROJECTS_REQUEST })
export const getProjectsSuccess = (projects) => ({ type: types.GET_PROJECTS_SUCCESS, projects })
