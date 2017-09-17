import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Post from './components/Post';
import PostForm from './components/PostForm';

var NavigationBar = require("./components/NavigationBar");

class App extends Component {
  render() {
    return (
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <Post />
        <PostForm />
      </div>
    );
  }
}

export default App;
