import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';

import LogOutButton from './LogOutButton';

const NavBar = () => (
  <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-3">
    <div className="container">
      <Link className="navbar-brand" to="/">SRM2</Link>
          <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link"to="/managelists">Manage lists</Link>
              </li>
              <li className="nav-item">
                  <LogOutButton className="" />
              </li>
          </ul>
      </div>
    </nav>
)

export default NavBar;
