import React, { Component } from 'react';
import './App.css';
import Home from './container/HomeScreen';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Artist from "./container/ArtistScreen";
import Gerne from "./container/GerneScreen";
import Home from "./container/HomeScreen";
import PlayList from "./container/PlayListScreen";
import TopTen from "./container/TopTenScreen";


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
      <Router>
        <div className="App">
          <Route exact path="/" render={(props) => {
            return <Home {...props}/>
          }} />
          <Route exact path="/artist" render={(props) => {
            return <Artist {...props}/>
          }} />
          <Route exact path="/gerne" render={(props) => {
            return <Gerne {...props}/>
          }} />
          <Route exact path="/playlist" render={(props) => {
            return <PlayList {...props}/>
          }} />
          <Route exact path="/topten" render={(props) => {
            return <TopTen {...props}/>
          }} />

        </div>
      </Router>
    );
  }
}

export default App;
