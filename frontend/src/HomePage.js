import React, { Component } from 'react'
const redirectUri = "http://localhost:3000/api/v1/tracks/top_100";

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
          <div className="jumbotron bg-secondary text-center text-danger">
            <div className="container">
                <div className="ht-tm-header">
                    <h1 className="display-1 display-xxl text-uppercase">MZC</h1>
                    <span className="lead">A place you can discover new music</span>
        
                    <div className="mt-4">
                        <button onClick={console.log("Button1")} className="btn btn-danger btn-lg m-2 text-secondary">
                            <span>Login In</span>
                        </button>
        
                        <button onClick={console.log("Button2")} className="btn btn-danger text-secondary btn-lg m-2">
                            <span>Sign up</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
}


export default HomePage;