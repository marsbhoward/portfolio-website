import React, { Component } from 'react';
import ProjectsList from './projectsList';

class Featured extends Component {	

	render() {
		return(
			<div className= "featured">
				<div className= "border">
				  <h1>-Featured Projects-</h1>
				  <hr></hr>
				</div>
				<ProjectsList toggleDisplay= {this.props.toggleDisplay}/>		 
			</div>
		)
	}
}

export default Featured