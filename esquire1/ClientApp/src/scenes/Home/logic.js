import { createLogic } from 'redux-logic'
import * as types from './actionTypes'
import axios from 'axios'
import * as actions from './actions'

export const getProjectLogic = createLogic({
  type: types.GET_PROJECTS_REQUEST,
  latest: true,
  async process({ }, dispatch, done) {
    try {
      await axios.get(`${APP_API_URL}/projects`)
        .then(res => res.data)
        .then(projects => dispatch(actions.getProjectsSuccess(projects)))
        .then(() => done())
    } catch (err) {
      done()
    }
  }
})

export const addProjectLogic = createLogic({
  type: types.ADD_PROJECT_REQUEST,
  latest: true,
  async process({ action }, dispatch, done) {
    try {
      await axios.post(`${APP_API_URL}/projects`, action.project)
        .then(res => res.data)
        .then(project => dispatch(actions.addProjectSuccess(project)))
        .then(() => done())
    } catch (err) {
      done()
    }
  }
})


export default [
  addProjectLogic,
  getProjectLogic
]