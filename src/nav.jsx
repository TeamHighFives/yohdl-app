import React from 'react';
import { Link } from 'react-router';

export default React.createClass({
  render() {
    <nav className="nav">
      <ul role="nav">
        <li><Link to="/home" activeStyle={{ color: 'red' }}>Home</Link></li>
        <li><Link to="/login" activeStyle={{ color: 'red' }}>Login</Link></li>
        <li><Link to="/roomList" activeStyle={{ color: 'red' }}>Room list</Link></li>
      </ul>
    </nav>
  }
})
