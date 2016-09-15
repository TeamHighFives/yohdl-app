import React, {Component} from 'react';
import ReactAudioPlayer from 'react-audio-player';

class ClipsList extends Component {
  constructor(props) {
    super(props);
    this.playAll = this.playAll.bind(this);
    this.playNext = this.playNext.bind(this);
    this.stopPlayAll = this.stopPlayAll.bind(this);
    this.state = {
      clips: this.props.clips,
      numClips: this.props.clips.length,
      playing: false
    }
  }
  playAll() {

    this.setState({playing: true}, () => {
      let clipQueue = $(".react-audio-player").toArray();
      playNext(clipQueue) 
    })
    const playNext = (clipQueue) => {
      const clipQueueCopy = clipQueue.slice();
      function playNextCallback() {
        console.log("ended event caught");
        firstClip.removeEventListener('ended', playNextCallback)        
        playNext(clipQueueCopy);
      }
      if (!this.state.playing || clipQueue.length === 0) return;
      // let firstClip = clipQueue.shift();
      let firstClip = clipQueueCopy[0];
      clipQueueCopy.shift();
      console.log(clipQueueCopy)
      console.log(firstClip, "this is the first clip");
      firstClip.addEventListener('ended', playNextCallback)      
      firstClip.play().catch(()=>{
        console.log('caught error on play');
        firstClip.removeEventListener('ended', playNextCallback)        
        playNext(clipQueueCopy);
      });
      firstClip.addEventListener('ended', function(e){
        playNext(clipQueue);
     })
    }
    let clipQueue = $(".react-audio-player").toArray();
    playNext(clipQueue)

  }

  stopPlayAll() {
    this.setState({playing: false})
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
      <div className="right">
        <div onClick={this.playAll}>Play all</div>
        <div onClick={this.stopPlayAll}>Stop all</div>
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
