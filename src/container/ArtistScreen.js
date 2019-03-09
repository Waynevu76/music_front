import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import Artist from '../components/Artist';

class ArtistScreen extends Component {
    render() {
        return (
            <div>
                <NavBar/>
                <Artist/>
            </div>
        );
    }
}

export default ArtistScreen;