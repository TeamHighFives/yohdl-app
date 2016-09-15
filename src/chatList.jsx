import React, {Component} from 'react';

class ChatList extends Component {
	constructor() {
		super();
	}

  render() {
    let items = this.props.chats.map((item, index) => {return <li id={item.id} onClick={this.props.select.bind(null, item.id)} >{item.chatName}</li>});

    return (
			<div className="right">
	      <span id="chats">
	        <h2> My Yodles </h2>
	        <ul>
	          {items}
	        </ul>
	      </span>
			</div>
    );
  }
}

export default ChatList;
