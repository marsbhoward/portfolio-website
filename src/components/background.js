import React, { Component } from 'react';

let currentBackground = "background";
let currentHeader = "background2";
class Background extends Component {
//switch case for about or featured to change colors

	render() {
		let page = this.props.currentPage
		switch (page) {
			case "/about":
 				currentBackground = "background-2"
 				currentHeader = "background2-2"
				break;
			case "/project":
 				currentBackground = "background-3"
 				currentHeader = "background3-2"
				break;								
			default:
				currentBackground = "background"
				currentHeader = "background2"				
				break;
		}
		return(
			<div className="backdrop">
			  <div className= {currentBackground}>										 
			  </div>
			  <div className= {currentHeader}>
			  <p></p>
			    <p className="name">Mars</p>
			    <p className="name">B</p>
			    <p className="name">Howard</p>				  
			  </div>
			</div>
		)
	}
}

export default Background