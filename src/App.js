import React, { Component } from 'react';
import './App.css';
import Cards from './Cards/RandomNum';

class App extends Component {
  render() {
    return (
      <div className="container">
          <Cards/>
          <Cards/>
          <Cards/>
          <Cards/>
          <Cards/>
      </div>
    );
  }
}

export default App;
