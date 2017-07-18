import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../css/App.css';
import '../css/header.css';

class Header extends Component {
  render() {
    return (
      <div className="App-header">
        <nav className="nav">
          <ul className="navbar">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Header;