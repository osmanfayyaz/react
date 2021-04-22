import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      persons:[
        {name:'Osman',age:27,status:'single'},
        {name:'Dawood',age:23,status:'single'},
        {name:'Munib',age:25,status:'Married'}
        
      ],
      otherState:'some other value',
      showPersons: false
     }
    }


  
  // state={
  //   person:[
  //     {name:'Osman',age:27,status:'single'},
  //     {name:'Dawood',age:23,status:'single'},
  //     {name:'Munib',age:25,status:'Married'}
      
  //   ],
  //   otherState:'some other value',
  //   showPersons: false
  // }
  // personHandler= (newName)=>{
  //   // console.log("kicked");
  //   this.setState({
  //     person:[
  //       {name:newName,age:27,status:'single'},
  //       {name:'Ali',age:23,status:'single'},
  //       {name:'Rizwan',age:25,status:'Married'}
        
  //     ]
  //   })
  // }

  deleteNameHandler = (personIndex)=>{
    const persons = this.state.persons;
    persons.splice(personIndex,1);
    this.setState({persons:persons})
  }

  nameChangedHandler=(event)=>{
    this.setState({
      person:[
        {name:'Umair',age:27,status:'single'},
        {name:event.target.value,age:23,status:'single'},
        {name:'Mannan',age:25,status:'Married'}
      ]
    })
  }

  togglepersonHandler =()=>{
    this.setState({showPersons: !this.state.showPersons});
}

  render() {

    const style={
      backgroundColor:'white',
      font:'inherit',
      border:'2px solid #555',
      padding:'9px',
      cursor:'pointer'
    }
        {/* <Person
         name={this.state.person[0].name} 
         age={this.state.person[0].age} 
         status={this.state.person[0].status}/>   
        <Person 
        name={this.state.person[1].name} 
        age={this.state.person[1].age} 
        status={this.state.person[1].status}
        changed={this.nameChangedHandler}/ >   
        <Person 
        name={this.state.person[2].name}
         age={this.state.person[2].age}       
         status={this.state.person[2].status}
         click={this.personHandler.bind(this,'abeshak')}
         >My Hobbies:username</Person>    */}
    //     </div>
    //   );
    // }
    return (
         
        
      <div className="App">
         <h1>Welcome To Ecare!!!</h1> 
         <button style={style}
         onClick={this.togglepersonHandler}>Switch</button>
                
                <div>
           {this.state.showPersons === true && this.state.persons.map((p,index)=>(
            <Person
            click={()=>this.deleteNameHandler(index)}
            name={p.name}
            age={p.age}
            status={p.status}
            />
          ))}
          </div>
      </div>
     
    )
}
}

export default App;
