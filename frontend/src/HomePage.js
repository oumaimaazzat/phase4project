import React, { Component } from 'react'
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
            
          );
    
}
}


export default HomePage;