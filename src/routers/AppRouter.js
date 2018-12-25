import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import ReactGA from 'react-ga'

import FriendKanban from '../components/FriendKanban';
import EditFriendPage from '../components/EditFriendPage';
import ManageLists from '../components/ManageLists';
import LoginPage from '../components/LogInPage';
import EditAccountForm from '../components/EditAccountForm';
import LandingPage from '../components/LandingPage';
import Contact from '../components/Contact';




import createHistory from 'history/createBrowserHistory';
import PrivateRoute from './PrivateRoute';

export const history = createHistory();
<<<<<<< HEAD

const AppRouter = () => (
  <Router history={history} onUpdate={()=>window.Appcues.page()}>
    <div>
      <Switch>
        <Route path="/login" component={LandingPage} exact={true} onChange={()=>window.Appcues.start()}/>
        // <Route path="/login" component={LoginPage} exact={true}/>
        <PrivateRoute path="/" component={FriendKanban} exact={true}/>
        <PrivateRoute path="/friends/:id" component={EditFriendPage} exact={true}/>
        <PrivateRoute path="/ManageLists" component={ManageLists} exact={true}/>
        <PrivateRoute path="/Contact" component={Contact} exact={true}/>
        <PrivateRoute path="/account" component={EditAccountForm} exact={true}/>
      </Switch>
    </div>
  </Router>
);
=======
history.listen(location => {
	ReactGA.set({ page: location.pathname })
	ReactGA.pageview(location.pathname)
  // console.log(JSON.stringify(location));
})

class AppRouter extends React.Component {
  render() {
    return (
      <Router history={history} onUpdate={()=>window.Appcues.page()}>
        <div>
          <Switch>
            <Route path="/login" component={LandingPage} exact={true}/>
            // <Route path="/login" component={LoginPage} exact={true}/>
            <PrivateRoute path="/" component={FriendKanban} exact={true}/>
            <PrivateRoute path="/friends/:id" component={EditFriendPage} exact={true}/>
            <PrivateRoute path="/ManageLists" component={ManageLists} exact={true}/>
            <PrivateRoute path="/Contact" component={Contact} exact={true}/>
            <PrivateRoute path="/account" component={EditAccountForm} exact={true}/>
          </Switch>
        </div>
      </Router>
    )
  }
}
>>>>>>> master

export default AppRouter;
