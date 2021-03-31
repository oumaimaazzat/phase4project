import React, { Component } from "react";
// import hash from "./hash";
import "./App.css";
import HomePage from './HomePage'
import LoginPg from './LoginPg'
import LoginForm from './LoginForm'
import SignupForm from './SignupForm'
import Navbar from './navbar.js'
// import React from "react";
import ReactDOM from "react-dom";
// import LoginPage from './LoginPage'
export const authEndpoint = 'https://accounts.spotify.com/authorize';
// Replace with your app's client ID, redirect URI and desired scopes
const clientId = "24689acf4f524b839fec14ae0fb0e0cf";
const redirectUri = "http://localhost:3000/api/v1/tracks/top_100";
const scopes = [
  "user-read-currently-playing",
  "user-read-playback-state",
];
// Get the hash of the url


var hash = window.location.hash
  .substring(1)
  .split("&")
  .reduce(function (initial, item) {
    if (item) {
      var parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);
    }
    return initial;
  }, {});
window.location.hash = "";
class App extends Component {

  state = {
    view: "login",
    playlists: []
  }


componentDidMount(){
fetch(redirectUri)
.then(res => res.json())
.then(playlists => this.setState({ playlists }))
}


  changeToHome= () => {
    this.setState({
      view: "Home"
    })
  }
  changeToLoginForm = () => {
    this.setState({
      view: "LoginForm"
    })
  }

  changeToSignupForm = () => {
    this.setState({
      view: "SignupForm"
    })
  }

  
    
  
  render() {

    return (
      
      <div>
        <Navbar SignupForm={this.changeToSignupForm} LoginForm={this.changeToLoginForm} changeToHome={this.changeToHome} />

        {this.state.view === "login" ? <LoginPg SignupForm={this.changeToSignupForm} LoginForm={this.changeToLoginForm} changeToHome={this.changeToHome} playlists={this.state.playlists} /> : null}
        {this.state.view === "Home" ? <HomePage playlists={this.state.playlists}/> : null}
        {this.state.view === "LoginForm" ? <LoginForm /> : null }
        {this.state.view === "SignupForm" ? <SignupForm /> : null}
        










  
     




      </div>
//       <div className="App">
//         <HomePage />
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           {!this.state.token && (
//             <a
//               className="btn btn--loginApp-link"
//               href={`${authEndpoint}client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`}
//             >
//               Login to Spotify
//             </a>
//           )}
//           {this.state.token && (
//             console.log
//           )}
//         </header>
//       </div>
    );
  }
}




export default App;

