import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router';

class Rooms extends Component {
  render() {
    return (
      <div className="right padding-right">
        <h1>Rooms</h1>
        <Link to="/yohdl/room/1111">Room 1111</Link>
        <Link to="/yohdl/room/2222">Room 2222</Link>
        <Link to="/yohdl/room/1111">Room 3333</Link>
        <Link to="/yohdl/room/1111">Room 4444</Link>
      </div>
    )
  }
}

export default Rooms;
