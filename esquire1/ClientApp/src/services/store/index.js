import { createStore, applyMiddleware, compose } from 'redux'
import { createLogicMiddleware } from 'redux-logic'
import projectLogic from 'scenes/Home/logic'
import rootReducer from 'reducer'

const INITIAL_STATE = {}

const store = createStore(
  rootReducer,
  INITIAL_STATE,
  compose(
    applyMiddleware(createLogicMiddleware(projectLogic)),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store