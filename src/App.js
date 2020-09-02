import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: 'jekd', name: 'Max', age: 28 },
      { id: 'jele', name: 'Manu', age: 29 },
      { id: 'jeqol', name: 'Stephanie', age: 26 },
      { id: 'lopd', name: 'Eric', age: 51 },
      { id: 'vwod', name: 'Grace', age: 36 }
    ],
    otherState: 'some other value',
    showPersons: false
  }



deletePersonHandler = (personIndex) => {
// const persons = this.state.persons.slice();
const persons = [...this.state.persons] 
persons.splice(personIndex, 1);
this.setState({persons: persons})
}

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Max', age: 28 },
        { name: event.target.value, age: 29 },
        { name: 'Stephanie', age: 26 },
        { name: 'Eric', age: 51 },
        { name: 'Grace', age: 36 }
      ]
    })
  }
  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }
  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px'
    };
    let persons = null
    if(this.state.showPersons) {
      persons = (
      <div> 
        {this.state.persons.map((person, index) => {
          return <Person
          click={() => this.deletePersonHandler(index)} 
          name={person.name}
           age={person.age}
           key={person.id} 
          
           />
        })}
   
      </div>
      );
    }

    return (
      <div className="App">

        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button style={style} onClick={ this.togglePersonHandler}>Switch Name</button> {/* doing things this way can be inifficient  */}
        {persons}
      
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;