import React, {Component} from 'react';
import ReactDOM from 'react-dom'
import Recorder from './recordClip.jsx';
import ChatList from './chatList.jsx';
import ClipsList from './clipsList.jsx';
var socket = io.connect();


class App extends Component {
	constructor() {
		super();
		this.state = {clips: ['clipBkZaKzL2.oog', 'clipHkkEkfU2.oog', 'clipHyGI5fLh.oog']}
	}
	selectChat(id) {
		console.log(id);
		socket.emit('chatID', id);
	}
	componentWillRender() {
		var that = this;
		socket.on('userObj', function (data) {
			that.setState({ data });
			console.log(that.state, 'current state');
		})
	}
	componentDidMount() {
		var that = this;
			socket.on('newClip', function (url) {
				console.log('inside new clip event');
				// setTimeout(() => {
				// 	that.setState({ files: [url] })
				// }, 3000);
				//that.state.chats[0].files = [url];
				console.log("URL did Mount", url); 
				that.forceUpdate();
		})
	}
	

  render() {
    return (
      <div className="Header">
        <h1>Yodle.</h1>
				<ClipsList clips={this.state.clips} />
      </div>
    );
  }
}

const styles = {
	container: {
		size: '80px',
	},
}

ReactDOM.render(
	<App />,
	document.getElementById('app')
);