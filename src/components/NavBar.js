import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';

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
                  <a className="nav-link" href="#">Services</a>
              </li>
              <li className="nav-item">
                  <a className="nav-link" href="#">Contact</a>
              </li>
          </ul>
      </div>
    </nav>
)

export default NavBar;
