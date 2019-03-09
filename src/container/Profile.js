import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import ProfileUser from '../components/ProfileUser';
import AboutUs from '../components/AboutUs';

export default class Profile extends Component {
  render() {
    return (
      <div>
        <NavBar 
            onLogin={this.props.onLogin} 
            username={this.props.username}/>
        <ProfileUser username={this.props.username}/>
        <AboutUs/>
      </div>
    )
  }
}
