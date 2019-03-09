import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import Gerne from '../components/Gerne';

class GerneScreen extends Component {
    render() {
        return (
            <div>
                <NavBar/>
                <Gerne/>
            </div>
        );
    }
}

export default GerneScreen;