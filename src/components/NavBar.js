import React from 'react';
import ReactDOM from 'react-dom';
import {Link, NavLink} from 'react-router-dom';

import LogOutButton from './LogOutButton';

const NavBar = () => (
  <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-3 navbar__card-2">
    <title>Buddy</title>
    <div className="container">
      <Link className="navbar-brand" to="/">Buddy</Link>
      <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link" to="/" exact={true}>Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/managelists" exact={true}>Manage lists</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/contact" exact={true}>Contact</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/account" exact={true} >Account</NavLink>
          </li>
          <li className="nav-item">
            <LogOutButton className="nav-link"/>
          </li>
      </ul>
      </div>
    </nav>
)

export default NavBar;
