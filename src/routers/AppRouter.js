import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';

import FriendKanban from '../components/FriendKanban';
import EditFriendPage from '../components/EditFriendPage';
import ManageLists from '../components/ManageLists';
import LoginPage from '../components/LoginPage'

import createHistory from 'history/createBrowserHistory';
import PrivateRoute from './PrivateRoute';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <Route path="/login" component={LoginPage} exact={true}/>
        <PrivateRoute path="/" component={FriendKanban} exact={true}/>
        <PrivateRoute path="/friends/:id" component={EditFriendPage} exact={true}/>
        <PrivateRoute path="/ManageLists" component={ManageLists} exact={true}/>
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
