import React, { Component } from 'react';

import classes from './App.css'; 
import  Persons from '../components/Persons/Persons';
import  Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import Aux from '../hoc/Auxiliary';


class App extends Component {

  constructor(props){
    super(props);
    console.log("[App.js] constructor");

  }

  state = {
    persons : [
            { id :'1', name : "Ruchi", age : 28},
            { id :'2', name : "Shahu", age : 29},
            { id :'3', name : "Max", age : 23} ],
    otherState : 'some value',
    showPerson : false,
    showCockpit : true,
    changeCounter : 0,
    authenticated : false,
  }

  static getDerivedStateFromProps(props,state){
    console.log("[App.js] getDerivedStateFromProps",props);
    return state;
  }
  
  componentDidMount(){
    console.log('[App.js]  componentDidmount');
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log('[App.js]  shouldComponentUpdate');
    return true;
  }

  componentDidUpdate(){
    console.log('[App.js]  componentDidUpdate');
  }

  deletePersonHandler = (personIndex) => {
      const persons = [...this.state.persons];
      persons.splice(personIndex, 1);
      this.setState({persons : persons});
  }

  nameChangeHandler = (event,id) => {
   //  console.log('Successfully clicked');

   const personIndex = this.state.persons.findIndex( p => {
      return p.id === id;
   });


   const person = {
      ...this.state.persons[personIndex]   
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState((prevState,props) => {
      return{
        persons :persons,
        changeCounter : prevState.changeCounter + 1,
      }
    })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPerson;
    this.setState({ showPerson : !doesShow})
  }

  loginHandler = () => {
    this.setState({authenticated: true})
  }
  render() {
 
      console.log("[App.js] render");
      let persons = null ;
      let btn_class ='';
      if(this.state.showPerson)
      {
        persons = 
                 <Persons persons={this.state.persons}
                 clicked={this.deletePersonHandler}
                 changes={this.nameChangeHandler}
                 isAuthenticated={this.state.authenticated}
                 />
            
       }
     
    return (
      
      <Aux classes={classes.App}>
      <button onClick={ () => {
        this.setState({showCockpit : false})
      }}
      >Remove Cockpit</button> 
      {this.state.showCockpit ? 
      <Cockpit
                    title={this.props.appTitle}
                    showPerson={this.state.showPerson}
                    personsLength={this.state.persons.length}
                    clicked={this.togglePersonsHandler}
                    login={this.loginHandler}
                    /> : null}
                    
          
          
          {persons}
          
      </Aux>
        
    );
  }
}

export default withClass(App,classes.App);
