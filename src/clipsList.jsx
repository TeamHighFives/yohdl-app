import React, {Component} from 'react';
import ReactAudioPlayer from 'react-audio-player';

class ClipsList extends Component {
  render() {
    let items; 
    if(this.props.clips.length > 0) {
      console.log("thispropsclips", this.props.clips);
      console.log("this", this);
      this.props.clips.reverse();
      items = this.props.clips.map((item, index) => {
      let path = '/../../clips/' + item; 
      let last = this.props.clips.length - 1;
      if(index !== last) {
      return <li> <ReactAudioPlayer src={path}/> </li>
      } else {     
      return <li> <ReactAudioPlayer src={path} autoPlay="true"/> </li>
      }
    });
  }
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