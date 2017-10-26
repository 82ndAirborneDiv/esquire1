import { createStore, applyMiddleware, compose } from 'redux'
import { createLogicMiddleware } from 'redux-logic'
import projectLogic from 'scenes/Home/logic'
import rootReducer from 'reducer'

const INITIAL_STATE = {}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  rootReducer,
  INITIAL_STATE,
  composeEnhancers(
    applyMiddleware(createLogicMiddleware(projectLogic))
  )
);

export default store