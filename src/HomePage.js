import React, { Component } from 'react'
const redirectUri = "http://localhost:3000/api/v1/tracks/top_100";

class HomePage extends Component {

    state= {
        playlists: []
    }

componentDidMount(){
    fetch(redirectUri)
    .then(res => res.json())
    .then(playlists => this.setState({ playlists }))
  }

render() {
    debugger
return (

    <div>

        {'hi'}

    </div>
    
    );
    }
}
export default HomePage;