import React, { Component } from 'react';
import { Link } from 'react-router';


class Nav extends Component {
  render() {
    return (
      <header id="head">
      	<div className="container">
          	<nav id="menu">
          		<input type="checkbox" id="toggle-nav"/>
          		<label id="toggle-nav-label" htmlFor="toggle-nav"><i className="icon-reorder"></i></label>
          		<div className="box">
      	    		<ul>
                  <li><Link to="/yohdl/login" activeStyle={{ color: 'red' }}><i className="icon-copy"></i> Login</Link></li>
                  <li><Link to="/yohdl/rooms" activeStyle={{ color: 'red' }}><i className="icon-file-alt"></i>Room list</Link></li>
      	    		</ul>
          		</div>
          	</nav>
      	</div>
      </header>
    )
  }
}

export default Nav;
