import React, { Component } from 'react';
import { Link } from 'react-router';


class Nav extends Component {
  render() {
    return (
      <nav className="nav">
        <ul role="nav">
          <li><Link to="/yohdl" activeStyle={{ color: 'red' }}>Home</Link></li>
          <li><Link to="/yohdl/login" activeStyle={{ color: 'red' }}>Login</Link></li>
          <li><Link to="/yohdl/room/1111" activeStyle={{ color: 'red' }}>Room list</Link></li>
        </ul>
      </nav>
    )
  }
}

export default Nav;
