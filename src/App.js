import React, { Component } from 'react';
import './App.css';
import LetterButton from './Component/LetterButton';

import words from './Data/words.json'

const ALPHABET = 'abcdefghijklmnopqrstuvwxyz'.split('')

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      pickedLetters: []
    }
  }

  componentDidMount(){

    console.log(words)
    console.log(words[2])
  }

  addLetterToPickedArray = (letter) => {
    const _newPickedLetters = this.state.pickedLetters.slice()
    _newPickedLetters.push(letter)
    console.log(_newPickedLetters)
    this.setState({
      pickedLetters: _newPickedLetters
    })
  }

  render() {
    return (
      <div className="App">
        {ALPHABET.map((letter, i) => {
          return <LetterButton 
            key={i} 
            letter={letter} 
            picked={this.state.pickedLetters}
            addLetterHandler={this.addLetterToPickedArray} />
        })}

        <h1>Letters picked:</h1>
        {this.state.pickedLetters.map((letter, i) => {
          return <div key={i}>{letter}</div>
        })}
        <section className="underscore">
          <div className="1"> _ </div>
          <div className="2"> _ </div>
          <div className="3"> _ </div>
          <div className="4"> _ </div>
          <div className="5"> _ </div>
          <div className="6"> _ </div>
          <div className="7"> _ </div>
        </section>

      </div>
      
    );
  }
}

export default App;
