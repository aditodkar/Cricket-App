import React, { Component } from 'react';
import './App.css';
import Home from './components/home';
import Matchinfo from './components/matchinfo';

class App extends Component {
  render() {
    return (
        <div className="App">
            <Home />
        </div>
    );
  }
}

export default App;
