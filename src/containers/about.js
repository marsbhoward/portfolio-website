import React, { Component } from 'react';
import AboutMe from '../components/aboutMe';
import {Spring} from 'react-spring/renderprops'

class About extends Component {
	componentDidMount() {
    	this.props.pageSwitch("/about") 
  	}


	render() {
		return(
	    	<Spring
	      		from={{marginTop:-500}}
	      		to={{marginTop:0}}>
	      	{props=>			
				<div style={props} className= "homepage"> 
					<h3 className="header">mars howard</h3>
					<h3 className="title"> Mars Howard</h3>
					<AboutMe/>			
				</div>
			}
			</Spring>  
		)
	}
}

export default About