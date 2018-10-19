import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';

import FriendKanban from '../components/FriendKanban';
import EditFriendPage from '../components/EditFriendPage';
import ManageLists from '../components/ManageLists';
import NavBar from '../components/NavBar';
import createHistory from 'history/createBrowserHistory';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <NavBar />
      <Switch>
        <Route path="/" component={FriendKanban} exact={true}/>
        <Route path="/friends/:id" component={EditFriendPage} exact={true}/>
        <Route path="/ManageLists" component={ManageLists} exact={true}/>
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
