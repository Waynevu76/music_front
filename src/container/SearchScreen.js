import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import SearchTrack from '../components/SearchTrack';

class SearchScreen extends Component {
    render() {
        return (
            <div>
                <NavBar/>
                <SearchTrack/>
            </div>
        );
    }
}

export default SearchScreen;