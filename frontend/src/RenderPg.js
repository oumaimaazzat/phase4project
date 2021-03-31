import React, { Component } from 'react'




class RenderPg extends Component {

render() {
    
    return (
        <div className="songContainer">
          <a href={`https://open.spotify.com/embed/track/${this.props.song.spotify_id}`} target="_blank"><img src={this.props.song.image} className="songImg"/> </a> 
          <p className="songName">{this.props.song.name}</p>
          {this.props.song.preview !== null ? <audio controls>
            <source src={this.props.song.preview} />
            </audio> : "(No Preview Available)"}
            
          
        </div>
    )
}
}
export default RenderPg