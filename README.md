# Conception d'une application React avec TS
Dans ce point de contrôle, vous convertirez le code ci-dessous en Typescript.

Il vous est demandé de donner une description des étapes que vous suivrez pour effectuer les modifications (créer un code bien commenté)


Instructions

Code 01 : 

import React depuis 'react'; 
const Greeting = ({ name }) => { 
return <div>Bonjour, {name}!</div>;
 };
 export default Greeting;

 
Code 02 :

import React, { Component } from 'react'; 
class Counter extends Component { 
state = {
 count: 0
 }; increment = () => {
 this.setState({ count: this.state.count + 1 }); 
}; 
render() { 
return 
( <div> 
<p>Count: {this.state.count}</p> 
<button onClick={this.increment}>Increment</button> 
</div> );
 }
 } 
export default Counter;
