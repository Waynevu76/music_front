import React, { Component } from 'react';
import './App.css';
import Home from './container/HomeScreen';
import axios from 'axios';

class App extends Component {
  state={};
  _onLogin = () => {
    axios
      .post("http://localhost:6699/api/auth", {
        username: this.state.username, 
        password: this.state.password
      })
      .then(response =>
        this.setState({
          username: response.data.username,
          id: response.data.id
        })
      )
      .catch(err => console.error(err));
  };
  render() {
    return (
      <div className="App">
        <Home/>
      </div>
    );
  }
}

export default App;
