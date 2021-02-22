import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state={
    person:[
      {name:'Osman',age:27,status:'single'},
      {name:'Dawood',age:23,status:'single'},
      {name:'Munib',age:25,status:'Married'}
      
    ]
  }
  personHandler= ()=>{
    // console.log("kicked");
    this.setState({
      person:[
        {name:'Hafiz',age:27,status:'single'},
        {name:'Zubair',age:23,status:'single'},
        {name:'Mannan',age:25,status:'Married'}
        
      ]
    })
  }
  render() {
    return ( 
      <div className="App">
         <h1>Welcome To Ecare!!!</h1> 
         <button onClick={this.personHandler}>Submit</button>
         <Person name={this.state.person[0].name} age={this.state.person[0].age} status={this.state.person[0].status}/>   
         <Person name={this.state.person[2].name} age={this.state.person[1].age} status={this.state.person[2].status}/>   
         <Person name={this.state.person[1].name} age={this.state.person[2].age} status={this.state.person[1].status}/>   
      </div>
      
    );
    // return React.createElement('div',{className:'App'}, React.createElement('h1',null,'Welcome To Ecare!!!'));
  }
}

export default App;
