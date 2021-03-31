import React, { Component } from 'react'
import RenderPg from './RenderPg'
import { Container } from "reactstrap";
const redirectUri = "http://localhost:3000/api/v1/tracks/top_100";
// import assets from "./src/assets";


class HomePage extends Component {


render() {
   
    return (
        <div>
            <div className="allSongs">
            {this.props.playlists.map(song => <RenderPg song={song} key={song.id}/>)}
            </div>

{/* <div className="allSongs">
            {this.state.playlists.map(song => <RenderPg song={song} key={song.id}/>)}
            </div> */}
        </div>
            
          );

    }
}


export default HomePage;