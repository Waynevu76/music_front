import React, { Component } from 'react';
import './App.css';
import HomeScreen from './container/HomeScreen';
import axios from './axios';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Artist from "./container/ArtistScreen";
import Gerne from "./container/GerneScreen";
import Home from "./container/HomeScreen";
import PlayList from "./container/PlayListScreen";
import TopTen from "./container/TopTenScreen";
import Profile from './container/Profile';


class App extends Component {
  state={};
  _onLogin = (response) => {
    this.setState({
      username: response.data.username,
      id: response.data.id
    })
  };

  componentDidMount(){
    axios
    .get("/api/auth")
    .then(data=>{
      this.setState(data.data)
    })
    .catch(err=>console.log(err)
    )
  }
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" render={(props) => {
            return <Home {...props} 
            username={this.state.username}
            onLogin={this._onLogin}/>
          }} />
          <Route exact path="/artist" render={(props) => {
            return <Artist {...props}
            username={this.state.username}
            onLogin={this._onLogin}/>
          }} />
          <Route exact path="/gerne" render={(props) => {
            return <Gerne {...props}
            username={this.state.username}
            onLogin={this._onLogin}/>
          }} />
          <Route exact path="/playlist" render={(props) => {
            return <PlayList {...props}
            username={this.state.username}
            onLogin={this._onLogin}/>
          }} />
          <Route exact path="/topten" render={(props) => {
            return <TopTen {...props}
            username={this.state.username}
            onLogin={this._onLogin}/>
          }} />
          <Route exact path="/profile" render={(props) => {
            return <Profile {...props}
            username={this.state.username}
            onLogin={this._onLogin}/>
          }} />

        </div>
      </Router>
    );
  }
}

export default App;
