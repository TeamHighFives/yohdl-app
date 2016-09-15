import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router';

class Rooms extends Component {
  render() {
    return (
      <div>
        <h1>Rooms</h1>
        <Link to="/yohdl/room/1111">Room 1111</Link>
        <Link to="/yohdl/room/2222">Room 2222</Link>
        <Link to="/yohdl/room/3333">Room 3333</Link>
        <Link to="/yohdl/room/4444">Room 4444</Link>
        <Link to="/yohdl/room/5555">Room 5555</Link>
        <Link to="/yohdl/room/6666">Room 6666</Link>
        <Link to="/yohdl/room/7777">Room 7777</Link>
      </div>
    )
  }
}

export default Rooms;
