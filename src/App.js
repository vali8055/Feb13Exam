import React, { Component } from 'react';
import './App.css';
import Nav from './nav.js'
import Image from './image.js'
import Biography from './biography';

class App extends Component {
  
  render() {
    return (
    <div className='App'>
      <Nav  />
      <Image/>
      <Biography/>
    </div>
    );
  }
}

export default App;
