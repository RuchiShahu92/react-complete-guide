import React, {useEffect,useRef} from 'react';
import classes from './Cockpit.css';

const Cockpit = (props) => {
	
		const toggleBtnRef = useRef(null);
		
		useEffect (() => {
			console.log('[Cockpit.js] userEffect' );
			//Http request..
			/*const timer = setTimeout ( () => {
					alert('Saved data to cloud!');
			}, 1000);*/
			toggleBtnRef.current.click();
			return () => {
				//clearTimeout(timer);
				console.log("[cockpit.js] cleanup work in useeffect");
			}
		}, [])

		useEffect (() => {
			console.log('[Cockpit.js] 2nd userEffect' );
			//Http request.. 
			return () => {
				console.log("[cockpit.js] cleanup work in 2nd useeffect");
			}
		})

		const assignedClasses = [];
		let btn_class = '';

		if(props.showPesons){
       		btn_class = classes.Red;
    	}
         

		if(props.personsLength <= 2){
		assignedClasses.push(classes.red)
		}

		if(props.personsLength <= 1){
		assignedClasses.push(classes.bold)
		}

	return(
		<div className={classes.Cockpit}>
			<h1>Hi, I am a React App {props.title}</h1>
            <p className={assignedClasses.join((' '))}>This is really working</p>
            <button ref={toggleBtnRef} className={btn_class} onClick={props.clicked}>Click Here</button> 
            <button className={btn_class} onClick={props.login}>Login</button> 
		</div>

		);
}

export default React.memo(Cockpit);