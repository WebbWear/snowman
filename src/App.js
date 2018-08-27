import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const ALPHABET = 'abcdefghijklmnopqrstuvwxyz'.split('')

class App extends Component {
  render() {
    return (
      <div className="App">
        {ALPHABET.map((letter, i) => 
          return <letterButton key={i} letter={letter}/>

         })}
        
      </div>
    );
  }
}

export default App;
