import React, {Component} from 'react';
import ReactAudioPlayer from 'react-audio-player';

class ClipsList extends Component {
  constructor(props) {
    super(props);
    this.playAll = this.playAll.bind(this);
    this.playNext = this.playNext.bind(this);    
    this.state = {
      clips: this.props.clips,
      numClips: this.props.clips.length,
      playThrough: false
    }
  }
  playAll() {
    function playNext(clipQueue) {
      let firstClip = clipQueue.shift();
      firstClip.play().catch(()=>{
        console.log('caught error on play');
        playNext(clipQueue);
      });
      firstClip.addEventListener('ended', function(e){
        playNext(clipQueue);
     })
    }
    let clipQueue = $(".react-audio-player").toArray();
    playNext(clipQueue)    

  }

  playNext(e) {
    if (!this.state.playThrough) return;
    console.log("this is e in playNext", e);

  }

  render() {
    let items;
    if(this.props.clips.length > 0) {
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
