import React, {Component} from 'react';
import ReactAudioPlayer from 'react-audio-player';

class ClipsList extends Component {
  render() {
    let items; 
    if(this.props.clips.length > 0) {
      console.log("thispropsclips", this.props.clips);
      console.log("this", this);
      
      items = this.props.clips.map((item) => {

      let path = '/../../clips/' + item; 
      console.log("items", path); 
      return <div> <ReactAudioPlayer src={path}/> </div>
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