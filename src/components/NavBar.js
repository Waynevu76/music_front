import React, { Component } from 'react';
import NavContent from './NavContent';
import SearchField from './SearchField';
import Login from './Login';

class NavBar extends Component {
    render() {
        return (
          <div className="navbar">
            <div className="container">
              <SearchField/> 
              <NavContent/>
              <Login/>
            </div>
            
          </div>
      )
    }
}

export default NavBar;