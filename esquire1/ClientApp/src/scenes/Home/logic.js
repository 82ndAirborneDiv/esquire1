import { createLogic } from 'redux-logic'
import * as types from './actionTypes'
import axios from 'axios'
import * as actions from './actions'

export const homeLogic = createLogic({
  type: types.GET_PROJECTS_REQUEST,
  latest: true,
  async process({}, dispatch, done) {
    try {
      await axios.get(`${APP_API_URL}/projects`)
        .then(res => res.data)
        .then(projects => dispatch(actions.getProjectsSuccess(projects)))
        .then(() => done())
    } catch(err) {
      done()
    }
  }
})
