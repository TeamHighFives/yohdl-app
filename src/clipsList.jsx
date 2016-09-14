import React, {Component} from 'react';
import ReactAudioPlayer from 'react-audio-player';

class ClipsList extends Component {
  render() {
    let items = this.props.clips.map((item) => {
      console.log("items", item); 
      let path = '/../../clips/' + item; 
      return <li> <ReactAudioPlayer src={path} autoPlay="true" /> </li>
    });

    return (
      <span id="clips">
        <ul>
        	{items}
        </ul>
      </span>
    );
  }
}

export default ClipsList;