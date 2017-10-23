import { createMockStore } from 'redux-logic-test'
import MockAdapter from 'axios-mock-adapter'
import axios from 'axios'
import reducer from '../reducer'
import logic from '../logic'
import * as types from '../actionTypes'

describe('Home logic (async actions)', () => {
  let store
  let mock
  beforeEach(() => {
    store = createMockStore({
      reducer: reducer,
      logic: logic
    })
    mock = new MockAdapter(axios)
  })
  
  test('should get project list and dispatch GET_PROJECTS_SUCCESS when done', (done) => {
    mock.onGet('/api/projects').reply(200, [
        { name: 'Project 1', id: 12345 },
        { name: 'Project 2', id: 54321 }
    ])
    store.dispatch({ type: types.GET_PROJECTS_REQUEST })
    store.whenComplete(() => {
      expect(store.actions).toEqual([
        { type: types.GET_PROJECTS_REQUEST },
        { 
          type: types.GET_PROJECTS_SUCCESS, 
          projects: [{ name: 'Project 1', id: 12345 }, { name: 'Project 2', id: 54321 }] 
        }
      ])
      done()
    })
  })
  
  test('should post a new project and dispatch ADD_PROJECT_REQUEST when successful', (done) => {
    mock.onPost('/api/projects').reply(200, { 
      id: 12345, 
      name: 'New Project', 
      isCompleted: false
    })
    store.dispatch({ type: types.ADD_PROJECT_REQUEST })
    store.whenComplete(() => {
      expect(store.actions).toEqual([
        { type: types.ADD_PROJECT_REQUEST },
        {
          type: types.ADD_PROJECT_SUCCESS,
          project: {
            id: 12345,
            name: 'New Project',
            isCompleted: false
          }
        }
      ])
      done()
    })
  })
  
})