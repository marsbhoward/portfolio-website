import React, { Component } from 'react';

class Projects extends Component {
  constructor(props){
    super(props)
    this.state = {highlight: "highlight " +this.props.project.class}
  }

  onClick = () => {
  	this.props.toggleDisplay();
  	this.setInfo();
  }


  setInfo = () => {
  	// set localStorage to this.props.project.video
  	localStorage.setItem( 'demo', this.props.project.video )
  	localStorage.setItem( 'github', this.props.project.github )
  	localStorage.setItem( 'live', this.props.project.live )
    localStorage.setItem("features", JSON.stringify(this.props.project.features));
  }

	mouseEnter = () => {
		//return current project
		this.setState({
	      highlight: "onlight"
	    })
	    //spotlight that describes project
	    this.props.description(this.props.project.description)   

	}
	mouseExit = () => {
		//clear current
		this.setState({
	      highlight: "highlight " + this.props.project.class
	    })
	    //clear spotlight text
	    this.props.description("hover over the featured projects to learn more about them. click on the project to get more indeph information.")		
	} 



  render() {
  	let description
  	let className
  	if (this.state.highlight === "highlight"){
  		description = ""
  		className = ""
  	}
  	else{
  		description = <h5 className= "description">{this.props.project.description}</h5>
  		className = "underline"
  	}
	return(
	  <div className= {this.state.highlight} onClick={this.onClick} onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseExit}> 
		<h4 className= {className}> {this.props.project.name}</h4>
		{description}
	  </div>
	)
  }
}

export default Projects