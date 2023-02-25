import React, { Component } from 'react'
import './Track.css'


class Track extends Component {
  constructor(props) {
    super(props)
  
    
    this.addTrack=this.addTrack.bind(this)
    this.removeTrack=this.removeTrack.bind(this)
    
  }
  
  renderAction(){
    if(this.props.isRemoval){
      return <button className="Track-action" onClick={this.removeTrack}>-</button>
    } else {
      return <button className='Track-action' onClick={this.addTrack}>+</button>
    }
  }
  
  addTrack(){
    this.props.onAdd(this.props.track)
  }

  removeTrack(){
    this.props.onRemove(this.props.track)
  }
  

  render() {
    return (
      <div>
        <div className="Track">

           <div className="Track-information">
                 <h3>{this.props.track.album}</h3>
                 <p>{this.props.track.artist}| <a href={this.props.track.preview} target="_blank" rel=' noopener noreferrer'> Sample Me </a>| 
                 {this.props.track.release} {this.renderAction()} </p>
                 <div><a href={this.props.track.image} target='iframe_a'><img src={this.props.track.image} width='100' height='100' alt=''/></a></div>
                
              

           </div>
             
        </div>
       
     </div>
    )
  }
}

export default Track
