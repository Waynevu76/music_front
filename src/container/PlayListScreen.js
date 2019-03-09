import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import PlayList from '../components/PlayList';

class PlayListScreen extends Component {
    render() {
        return (
            <div className="">
                <NavBar/>
                <PlayList/>
            </div>
        );
    }
}

export default PlayListScreen;