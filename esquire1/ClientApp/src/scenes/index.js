import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './Home'

const Scenes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  )
}

export default Scenes
