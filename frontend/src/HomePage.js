import React, { Component } from 'react'
import RenderPg from './RenderPg'
import { Container } from "reactstrap";
const redirectUri = "http://localhost:3000/api/v1/tracks/top_100";
// import assets from "./src/assets";


class HomePage extends Component {

    state= {
        playlists: [],
        searchContainer: [],
    }

componentDidMount(){
    fetch(redirectUri)
    .then(res => res.json())
    .then(playlists => this.setState({ playlists }))
  }

render() {
   
    return (
        <div>
            <div className="allSongs">
            {this.state.playlists.map(song => <RenderPg song={song} key={song.id}/>)}
            </div>
          {/* <div className="jumbotron bg-secondary text-center text-danger">
            <div className="container">
                <div className="ht-tm-header">
                    <h1 className="display-1 display-xxl text-uppercase">MZC</h1>
                    <span className="lead">A place you can discover new music</span> */}
        
                    {/* <div className="mt-4">
                        <button onClick={console.log("Button1")} className="btn btn-danger btn-lg m-2 text-secondary">
                            <span>Login In</span>
                        </button>
        
                        <button onClick={console.log("Button2")} className="btn btn-danger text-secondary btn-lg m-2">
                            <span>Sign up</span>
                        </button>
                    </div>
                </div>
            </div> */}
        {/* // </div> */}
        
    
   
              <div
                className="background"
              >
                <div className="filter" />

                <div class="topnav">
                    <a href="#news">Listen</a>
                    <a href="#about">|</a>
                    <a href="#contact">Sign up</a>
                    <a href="#about">Log in</a>
                    
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


export default HomePage;