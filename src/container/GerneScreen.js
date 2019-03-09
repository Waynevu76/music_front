import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import Gerne from '../components/Gerne';

class GerneScreen extends Component {
    render() {
        return (
            <div>
                <NavBar 
                onLogin={this.props.onLogin} 
                username={this.props.username}/>
                <Gerne/>
            </div>
        );
    }
}

export default GerneScreen;