import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
class NavContent extends Component {
    render() {
        return (
            <nav className="navcontent">
                <ul>
                    <li><Link to={"/"}>Home</Link></li>
                    <li><Link to={"/playlist"}>Playlist</Link></li>
                    <li><Link to={"/topten"}>Top 10</Link></li>
                    <li><Link to={"/gerne"}>Genre</Link></li>
                    <li><Link to={"/artist"}>Artist</Link></li>
                </ul>
            </nav>
        );
    }
}

export default NavContent;