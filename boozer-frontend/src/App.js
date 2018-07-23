import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'
import CocktailsContainer from './components/CocktailsContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <CocktailsContainer />
        </Router>
      </div>
    );
  }
}

export default App;
