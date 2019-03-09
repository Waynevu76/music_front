import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import PlayList from '../components/PlayList';

class PlayListScreen extends Component {
    render() {
        return (
            <div className="">
                <NavBar 
                onLogin={this.props.onLogin} 
                username={this.props.username}/>
                <PlayList/>
            </div>
        );
    }
}

export default PlayListScreen;