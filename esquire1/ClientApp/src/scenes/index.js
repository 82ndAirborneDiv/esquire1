import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './Home'
import NewProject from './NewProject'

const Scenes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/new/project" component={NewProject} />
    </Switch>
  );
};

export default Scenes
