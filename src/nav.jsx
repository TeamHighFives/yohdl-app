import React, { Component } from 'react';
import { Link } from 'react-router';


class Nav extends Component {
  render() {
    return (
      <div className="container">
      <nav>
      		<ul className="mcd-menu">
      			<li>
      				<Link to="/yohdl/login">
      					<i className="fa fa-home"></i>
      					<strong>Login</strong>
      					<small>shh do it</small>
      				</Link>
      			</li>
      			<li>
              <Link to="/yohdl/rooms">
      					<i className="fa fa-edit"></i>
      					<strong>Rooms</strong>
      					<small>just pick a room though</small>
      				</Link>
      			</li>
      		</ul>
      	</nav>
      </div>
    )
  }
}

export default Nav;
