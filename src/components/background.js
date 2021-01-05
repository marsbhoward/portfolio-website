import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'

let currentBackground = "background";
let currentHeader = "background2";
class Background extends Component {

  constructor(props){
    super(props)
  }

  handleClick = () => {
    const {history} = this.props
    if (history){
    	history.push('/featured')
    }
    else{
    	console.log('yes')
    }
  }

	render() {
		let page = this.props.currentPage
	//switch case for about or featured to change colors		
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
			    <p className="name" onClick={this.handleClick}>Mars</p>
			    <p className="name" onClick={this.handleClick}>B</p>
			    <p className="name" onClick={this.handleClick}>Howard</p>				  
			  </div>
			</div>
		)
	}
}

export default withRouter(Background);