import React, { Component } from 'react';
import NavContent from './NavContent';
import SearchField from './SearchField';
import Login from './Login';
import SignUp from "./SignUp";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class NavBar extends Component {

    render() {
      const display = this.props.username ? (
        <div>
          <Link to='/profile' className="navbar-text" style={{color:"white"}}>Welcome, {this.props.username}</Link>
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