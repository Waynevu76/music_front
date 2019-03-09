import React, { Component } from 'react';
import NavContent from './NavContent';
import SearchField from './SearchField';
import Login from './Login';
import SignUp from "./SignUp"

class NavBar extends Component {
    render() {
        return (
          <div className="navbar">
            <div className="container">
              <SearchField/> 
              <NavContent/>
              <Login/>
              <SignUp/>
            </div>
            
          </div>
      )
    }
}

export default NavBar;