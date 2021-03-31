import React, { Component } from 'react'
import RenderPg from './RenderPg'
import { Container } from "reactstrap";
import HomePage from './HomePage'
import LoginForm from './LoginForm'
const redirectUri = "http://localhost:3000/api/v1/tracks/top_100";
// import assets from "./src/assets";



class LoginPg extends Component {
    
    state = {
        view: ""
    }


render() {
   
    return (
        <div>
            {/* <div className="allSongs">
            {this.state.playlists.map(song => <RenderPg song={song} key={song.id}/>)}
            </div> */}

        
    
   
              <div
                className="background"
              >
                <div className="filter" />

                <div class="topnav">
                    <a href="#news">Listen</a>
                    <a>|</a>
                    <a >Sign up</a>
                    <a >Log in</a>
                    
                </div>
                <div className="content-center">
                  <Container>
                    <div className="title-brand">
                      <h1 className="presentation-title music">MZC.</h1>
                      </div>
                
                    <h2 className="text-center hello">
                      Music -- your way. 
                    </h2>
                  </Container>
                </div>
                
              </div>
              
            </div>
            
            );
            
        }
}


export default LoginPg;