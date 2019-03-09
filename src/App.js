import React, { Component } from 'react';
import './App.css';
import PlayListScreen from './container/PlayListScreen';

class App extends Component {
  render() {
    return (
      <div className="App">
        <PlayListScreen/>
      </div>
    );
  }
}

export default App;
