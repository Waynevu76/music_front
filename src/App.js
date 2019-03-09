import React, { Component } from 'react';
import './App.css';
import HomeScreen from './container/HomeScreen';
import axios from 'axios';
import { BrowserRouter, Route } from "react-router-dom";

class App extends Component {
  state={};
  _onLogin = (response) => {
    this.setState({
      username: response.data.username,
      id: response.data.id
    })
  };
  render() {
    return (
      <BrowserRouter>
        <div className="App">
        <Route
            exact
            path="/"
            render={props => {
              return <HomeScreen
                {...props}
                username={this.state.username}
                onLogin={this._onLogin}
              />;
            }}
          />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
