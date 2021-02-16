import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  render() {
    return ( 
      <div className="App">
         <h1>Welcome To Ecare!!!</h1> 
         <Person />  
      </div>
      
    );
    // return React.createElement('div',{className:'App'}, React.createElement('h1',null,'Welcome To Ecare!!!'));
  }
}

export default App;
