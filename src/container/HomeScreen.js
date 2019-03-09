import React, { Component } from 'react';
import Video from '../components/Video';
import NavBar from '../components/NavBar';
import FeelingQuestion from '../components/FeelingQuestion';
import ListMusic from '../components/ListMusic';
import WhyReact from '../components/WhyReact';
import Bottom from '../components/Bottom';
import AboutUs from '../components/AboutUs'

class HomeScreen extends Component {
    render() {
        return (
            <div>
                <Video/>
                <NavBar 
                onLogin={this.props.onLogin} 
                username={this.props.username}/>
                <FeelingQuestion/>
                <ListMusic/>
                <WhyReact/>
                <AboutUs/>
                <Bottom/>
            </div>
        );
    }
}

export default HomeScreen;