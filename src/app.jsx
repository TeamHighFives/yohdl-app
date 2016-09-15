import React, {Component} from 'react';
import ReactDOM from 'react-dom'
import { Router, Route, Link } from 'react-router';
import ClipsList from './clipsList.jsx';

var socket = io.connect();


class App extends Component {
	constructor() {
		super();
		this.state = {clips: []}
	}
	selectChat(id) {
		console.log(id);
		socket.emit('chatID', id);
	}
	componentWillRender() {
		var that = this;
		socket.on('userObj', function (data) {
			that.setState({ data });
		})
	}
	componentDidMount() {
		var that = this;
		let regRoomName = window.location.pathname.match(/(?!room)[1-9]+/)[0];

		// console.log("regex room name", regRoomName);
		// let splitPath = window.location.pathname.split('/')
		// let roomName = splitPath[splitPath.length - 2];
		let getPath = '/roomClips/' + regRoomName;
		// console.log("roomname", roomName)

		$.get(getPath, (data) => {
			data = JSON.parse(data);
			data.reverse();
			that.setState({clips: data});
		});
		var that = this;
			socket.on('newClip', function (url) {
				let newClips = that.state.clips.slice();
				newClips.push(url);
				that.setState({clips: newClips});
				console.log("URL did Mount", url);
				that.forceUpdate();
		})
	}

  render() {
    return (
			<div>
	      <div className="right padding-right">
	        <h1>Yodle.</h1>
					<ClipsList clips={this.state.clips} />
	      </div>
			</div>
    );
  }
}

const styles = {
	container: {
		size: '80px',
	},
}

export default App;
