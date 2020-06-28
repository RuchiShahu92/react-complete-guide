import React from 'react';
import Person from './Person.css'

const person = (pro) => {
	return (
		<div className="Person">
			<p onClick={pro.click}>I am a Person {pro.name} and I am {pro.age} years old! </p>
			<p>{pro.children}</p>
			<input type="text" onChange={pro.changed} value={pro.name} />
		</div>
		)
}

export default person;