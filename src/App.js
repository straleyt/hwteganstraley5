import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MovieHeader from './components/header';
import MovieList from './components/movielist';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MovieHeader/>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
