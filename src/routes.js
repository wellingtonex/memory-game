import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './containers/Home/HomePage';
import GamePage from './containers/Game/GamePage';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route exact path="/game" component={GamePage} />
  </Switch>
)

export default Routes;


