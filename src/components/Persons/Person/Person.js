import React, {Component} from 'react';

import PropTypes from 'prop-types';
import Aux from '../../../hoc/Auxiliary';
import withClass from '../../../hoc/withClass';
import classes from './Person.css';

class Person extends Component{

	constructor(props){
		super(props);
		this.inputElementRef = React.createRef();
	}

	componentDidMount(){
		//	this.inputElement.focus();
		this.inputElementRef.current.focus();
	}
	render(){
		console.log("[Person.js] rendering...");
		return(
			<Aux>
				{this.props.isAuth ? <p>Authenticated</p> : <p> Please Log In</p>}
				<p onClick={this.props.click}>I am a Person {this.props.name} and I am {this.props.age} years old! </p>
					<p>{this.props.children}</p>

					<input 
					//ref={(inputEl) => {this.inputElement = inputEl}} 
					ref={this.inputElementRef}
					type="text" onChange={this.props.changed} value={this.props.name} />
			</Aux>
		); 
	}

}

Person.propTypes= {
	click : PropTypes.func,
	name : PropTypes.string,
	age : PropTypes.number,
	changed: PropTypes.func
};

export default withClass(Person,classes.Person);