import React, { Component } from 'react';
import './navbar.css';

class Navbar extends Component {

  render() {
    return (
          <nav className="navbar navbar-inverse">
            <div className="container-fluid">
                <div className="navbar-header">
                  <a className="navbar-brand" href="/">Cricket App</a>
                </div>
                <ul className="nav navbar-nav">
                  <li><a href="/">Home</a></li>
                </ul>
            </div>
          </nav>
    );
  }
}

export default Navbar;
