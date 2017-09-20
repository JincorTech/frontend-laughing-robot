import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import routes from '../../routes';

const RootContainer = () => (
  <div>
    <div>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </div>
    <Switch>
      {routes.map(route => <Route key={route.path} {...route} />)}
    </Switch>
  </div>
);

export default RootContainer;
