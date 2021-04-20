import React from 'react';

const person= (props) =>{
    return (

        <div>

        <p onClick={props.click}>Hye I am <b>{props.name}</b> my age is <b>{props.age}</b> and i am <b>{props.status}</b></p>
        {/* <p>Hye I am <b>{props.name}</b> my age is <b>{props.age}</b> and i am <b>{props.status}</b></p>,
        <p>Hye I am <b>{props.name}</b> my age is <b>{props.age}</b> and i am <b>{props.status}</b></p>  */}
        <input type='text' onChange={props.changed} value={props.name}/>
        </div>
       
    
    
    );
}
export default person;