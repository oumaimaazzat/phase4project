import React, { Component } from 'react'
import RenderPg from './RenderPg'
import { Container } from "reactstrap";
import HomePage from './HomePage'

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
                    <a onClick={this.props.changeToHome}>Listen</a>
                    <a>|</a>
                    <a onClick={this.props.SignupForm}>Sign up</a>
                    <a onClick={this.props.LoginForm}>Log in</a>
                    
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
              {/* <form>
                 <label>
                        Name:
                       <input type="text" name="name" />
                                 </label>
                        <input type="submit" value="Submit" />
                        </form>
               */}
            </div>
            
            );
            
        }
}


export default LoginPg;