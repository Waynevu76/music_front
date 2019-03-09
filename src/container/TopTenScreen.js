import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import TopTen from '../components/TopTen';

class TopTenScreen extends Component {
    render() {
        return (
            <div>
                <NavBar 
                onLogin={this.props.onLogin} 
                username={this.props.username}/>
                <TopTen/>
            </div>
        );
    }
}

export default TopTenScreen;