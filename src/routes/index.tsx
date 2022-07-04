import React from 'react';
import { Switch } from 'react-router';

import Route from './Route';

import Dashboard from '../pages/Dashboard';
import Login from '../pages/Login';
import ProfilePage from '../pages/ProfilePage';
import Tags from '../pages/Tags';

const AppRoutes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Dashboard} isPrivate />
      <Route path="/profile/:username" exact component={ProfilePage} isPrivate />
      <Route path="/tags/:tag" exact component={Tags} isPrivate />
      <Route path="/login" exact component={Login} />
    </Switch>
  );
};

export default AppRoutes;
