import React, { Component } from 'react';
import Card from './card';
import { withRouter } from 'react-router-dom'

class Projects extends Component {
  constructor(props){
    super(props)
    this.state = {highlight: "highlight " +this.props.project.class}
  }

  handleClick = () => {
  	this.props.toggleDisplay();
  	this.setInfo();

  }


  setInfo = () => {
    const {history} = this.props
    let slug = this.props.project.name.replace(/\s+/g, '-').toLowerCase()
  	// set localStorage to this.props.project.video
    sessionStorage.setItem( 'currentProject', this.props.project.name)
  	sessionStorage.setItem( 'demo', this.props.project.video )
  	sessionStorage.setItem( 'github', this.props.project.github )
  	sessionStorage.setItem( 'live', this.props.project.live )
    sessionStorage.setItem("features", JSON.stringify(this.props.project.features));
    if (history)history.push('/' + slug)
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

//<div className= {this.state.highlight} onClick={this.onClick} onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseExit}> 
//    <h4 className= {className}> {this.props.project.name}</h4>
//    {description}
//</div>

  render() {
    const {history} = this.props;
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
    (history)
    ?
	  <Card name={this.props.project.name} classN={this.state.highlight} underline= {className} mouseEnter={this.mouseEnter} mouseExit={this.mouseExit} description={this.props.project.description} handleClick={this.handleClick}/>
    :
    <div>error</div>
	);
  }
}

export default withRouter(Projects);