import React, {Component} from 'react';
import logo from '../logo.svg';

//Header component
class MovieHeader extends Component{
    render() {return <div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to web, Tegan</h1>
        </header>
    </div>}};

export default MovieHeader;