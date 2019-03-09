import React, { Component } from 'react';

class NavContent extends Component {
    render() {
        return (
            <nav className="navcontent">
                <ul>
                <li>Home</li>
                    <li>Playlist</li>
                    <li>Top 10</li>
                    <li>Genre</li>
                    <li>Artist</li>
                </ul>
            </nav>
        );
    }
}

export default NavContent;