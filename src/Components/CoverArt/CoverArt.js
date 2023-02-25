import React from 'react'
import AlbumFrame from '../AlbumFrame/AlbumFrame'

export default function CoverArt() {
  return (
    <div className='coverArt'>
        <div className='picFrame'>
        
        <img src={this.props.albumImage} width='400' height='400' alt=''/>
      
      </div>
        <AlbumFrame/>
    </div>
  )
}
