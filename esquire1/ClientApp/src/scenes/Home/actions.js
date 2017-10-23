import * as types from './actionTypes'

export const getProjectsRequest = () => ({ type: types.GET_PROJECTS_REQUEST })
export const getProjectsSuccess = (projects) => ({ type: types.GET_PROJECTS_SUCCESS, projects })
export const addProjectRequest = (project) => ({ type: types.ADD_PROJECT_REQUEST, project })
export const addProjectSuccess = (project) => ({ type: types.ADD_PROJECT_SUCCESS, project })


export const getMongoProjectsRequest = () => ({ type: types.GET_MONGOPROJECTS_REQUEST })
export const getMongoProjectsSuccess = (projects) => ({ type: types.GET_MONGOPROJECTS_SUCCESS, projects })
export const addMongoProjectRequest = (project) => ({ type: types.ADD_MONGOPROJECT_REQUEST, project })
export const addMongoProjectSuccess = (project) => ({ type: types.ADD_MONGOPROJECT_SUCCESS, project })

