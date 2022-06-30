import React from 'react';
import { Switch } from 'react-router';
import { Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import ProfilePage from '../pages/ProfilePage';

const AppRoutes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Dashboard} />
      <Route path="/profile" exact component={ProfilePage} />
    </Switch>
  );
};

export default AppRoutes;
