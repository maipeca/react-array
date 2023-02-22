import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';

class App extends Component {
  render() {

    const arr = [
      [
        {
          name: ' Toyota',
          year: 2022
        },
        {
          name: ' Fiat',
          year: 2020
        },
        {
          name: ' Ferrari',
          year: 2012
        },
      ],

      [
        {
          name: ' Renault',
          year: 1950
        },
        {
          name: ' Toyota',
          year: 2020
        },
        {
          name: ' Seat',
          year: 2012
        },
      ]
    ];

    
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
        <ol>
          {arr.map(val =>{
            return val.map(obj =>{
             return <li>Name:{obj.name} Year:{obj.year}</li>
            }) 
          })}
        </ol>
        </p>
      </div>
    );
  }
}

export default App;

