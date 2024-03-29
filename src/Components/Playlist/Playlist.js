import React, { Component } from 'react'
import TrackList from '../TrackList/TrackList'
import './Playlist.css'

class Playlist extends Component {
  constructor(props) {
    super(props)
  
    this.handleNameChange=this.handleNameChange.bind(this)
  }
  

  handleNameChange(event){
    this.props.onNameChange(event.target.value);
  }
  render() {
    return (
      <div>
        <div className="Playlist">
              <input placeholder='Enter your playlist name' onChange={this.handleNameChange} />
                      <TrackList tracks={this.props.playlistTracks} onRemove={this.props.onRemove} isRemoval={true}/>
                            <button className="Playlist-save" onClick={this.props.onSave}>SAVE TO SPOTIFY</button>
</div>
      </div>
    )
  }
}

export default Playlist
