import  React,{Component} from 'react';

//import '../containers/App.css';
import  Person from './Person';

class Person_main extends Component{
	 state = {
    person : [
            {name : "Ruchi", age : 28},
            {name : "Shahu", age : 29},
            {name : "Max", age : 23} ],
    otherState : 'some value',
    showPerson : false
  }
  clcikHandler = (newName) => {
   //  console.log('Successfully clicked');

    this.setState({
        person : [
            {name : newName, age : 28},
            {name : "Shahu", age : 29},
            {name : "Max", age : 25} ],
    })
  }

  nameChangeHandler = (event) => {
   //  console.log('Successfully clicked');

    this.setState({
        person : [
            {name : "ruchi", age : 28},
            {name : event.target.value, age : 29},
            {name : "Max", age : 26} ],
    })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPerson;
    this.setState({ showPerson : !doesShow})
  }

  render() {

      const style = {
        backgroundColor :'white',
        font : 'inherit',
        border :  '1px solid blue',
        padding: '8px',
        cursor : 'pointer'
      }
    
      let persons = null ;

      if(this.state.showPerson)
      {
        persons = (
             <div> 
                <Person 
                  name={this.state.person[0].name} 
                  age={this.state.person[0].age}/>

                <Person 
                 name={this.state.person[1].  name}
                 click = {this.clcikHandler.bind(this,'max!')}
                 changed={this.nameChangeHandler}
                 age={this.state.person[1].age} >My Hobbies : Racing</Person>

                <Person 
                 name={this.state.person[2].name}  
                 age={this.state.person[2].age}/>   

               
             </div>
          )
      }


    return (
      <div className="App">
        
          <h1>Hi, I am a React App and Person backup</h1>
          <h1>This is really working</h1>
          <button style={style} onClick={this.togglePersonsHandler}>Click Here</button> 
        
          {persons}
         
      </div>
    );
  }
}

export default Person_main;
