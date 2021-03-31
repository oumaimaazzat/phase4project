import React, { Component } from "react";
// import hash from "./hash";
import "./App.css";
import HomePage from './HomePage'
import LoginPg from './LoginPg'
// import LoginPage from './LoginPage'
export const authEndpoint = 'https://accounts.spotify.com/authorize';
// Replace with your app's client ID, redirect URI and desired scopes
const clientId = "24689acf4f524b839fec14ae0fb0e0cf";
// const redirectUri = "http://localhost:3002/";
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
    login: ""
  }
    
  
  render() {

    return (
      <div>
        <HomePage />
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

