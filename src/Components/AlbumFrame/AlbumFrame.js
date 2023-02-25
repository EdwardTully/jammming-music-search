import React, { Component } from 'react'
import './AlbumFrame.css'


class AlbumFrame extends Component {

    constructor(props) {
        super(props)
      
        this.state = {
          albumImage: this.props.keyPic
        }
      }
   
    setImage(){
        const albumArt=this.props.keyPic
    
        this.setState({
            albumImage: albumArt
        })
    }

  render() {
    return (
      <div className='picFrame'>
        
        <img src={this.state.albumImage} width='400' height='400' alt=''/>
      
      </div>
    )
  }
}

export default AlbumFrame