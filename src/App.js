import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {

    const arr = [
      [
        {
          name: 'Afzal',
          age: 21
        },
        {
          name: 'Usama',
          age: 20
        },
        {
          name: 'Manal',
          age: 12
        },
      ],

      [
        {
          name: 'Faraz',
          age: 50
        },
        {
          name: 'Masood',
          age: 20
        },
        {
          name: 'Sarim',
          age: 12
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
             return <li>Name:{obj.name}-----Age:{obj.age}</li>
            }) 
          })}
        </ol>
        </p>
      </div>
    );
  }
}

export default App;
