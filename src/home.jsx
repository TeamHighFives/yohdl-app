import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import Nav from './nav.jsx';
import Room from './room.jsx';
import App from './app.jsx';
import Login from './login.jsx';

class Home extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <Nav />
        { this.props.children }
      </div>
    );
  }
}

ReactDOM.render(
	<Router history={browserHistory}>
		<Route path="/yohdl" component={Home}>
      <IndexRoute component={App}/>
			<Route path="/yohdl/room/1111" component={App}/>
			<Route path="/yohdl/login" component={Login}/>
		</Route>
	</Router>,
	document.getElementById('app')
);
