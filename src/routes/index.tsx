import React from 'react';
import { Switch } from 'react-router';
import { Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import ProfilePage from '../pages/ProfilePage';
import Tags from '../pages/Tags';

const AppRoutes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Dashboard} />
      <Route path="/profile" exact component={ProfilePage} />
      <Route path="/tags/:tag" exact component={Tags} />
    </Switch>
  );
};

export default AppRoutes;
