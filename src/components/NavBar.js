import React, { Component } from 'react';
import NavContent from './NavContent';
import SearchField from './SearchField';
import Login from './Login';
import SignUp from "./SignUp"

class NavBar extends Component {
    
    render() {
      const display = this.props.username ? (
        <div>
          <span className="navbar-text">Welcome, {this.props.username}</span>
        </div>
      ) : (<div>
            <Login  onLogin={this.props.onLogin}/>
            <SignUp  onLogin={this.props.onLogin}/>
          </div>
          
      );
        return (
          <div className="navbar">
            <div className="container">
              <SearchField/> 
              <NavContent/>
              {display}
            </div>
            
          </div>
      )
    }
}

export default NavBar;