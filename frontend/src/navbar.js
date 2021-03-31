import React, { Component } from 'react'




class Navbar extends Component {

render() {
    
    return (

         
            
<div class="topnav">
                    <a onClick={this.props.changeToHome}>Listen</a>
                    <a>|</a>
                    <a onClick={this.props.SignupForm}>Sign up</a>
                    <a onClick={this.props.LoginForm}>Log in</a>
                    
                </div>
          
       
        )
    }
}
export default Navbar


