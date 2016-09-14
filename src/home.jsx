import React, {Component} from 'react';
import ReactDOM from 'react-dom'
import { Router, Route, Link } from 'react-router';
import Recorder from './recordClip.jsx';
import ChatList from './chatList.jsx';
import ClipsList from './clipsList.jsx';
import Nav from './nav.jsx';
import Rooms from './rooms.jsx';
import App from './app.jsx';

class Home extends Component {
  render() {
    <Nav />
    { this.props.children }
  }
}

ReactDOM.render(
	<Router history={browserHistory}>
		<Route path="/" component={Home}>
      <IndexRoute component={App}/>
			<Route path="/rooms" component={Rooms}/>
			<Route path="/login" component={Login}/>
		</Route>
	</Router>,
	document.getElementById('app')
);
