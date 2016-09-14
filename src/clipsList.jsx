import React, {Component} from 'react';
import ReactAudioPlayer from 'react-audio-player';

class ClipsList extends Component {
  constructor(props) {
    super(props);
    this.playAll = this.playAll.bind(this);
  }
  playAll() {
    let clipQueue = Array.from(document.querySelectorAll(".react-audio-player"));
    let firstClip = clipQueue.shift();
  }

  render() {
    let items;
    if(this.props.clips.length > 0) {
      this.props.clips.reverse();
      items = this.props.clips.map((item, index) => {
      let path = '/../../clips/' + item;
      let last = this.props.clips.length - 1;
      if(index !== last) {
        return <li> <ReactAudioPlayer preload={'auto'} src={path}/> </li>
      } else {
        return <li> <ReactAudioPlayer preload={'auto'} src={path} autoPlay="true"/> </li>
      }
    });
  }
    return (
      <div>
        <div onClick={this.playAll}>Play all</div>
        <span id="clips">
          <ul>
            {items}
          </ul>
        </span>
      </div>
    );
  }
}

export default ClipsList;
