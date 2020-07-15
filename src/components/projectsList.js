import React, { Component } from 'react';
import Projects from './projects';

let projects = [
  {name:"river", github:"https://www.google.com/url?q=https://github.com/marsbhoward/river&sa=D&ust=1591585856197000", video: "https://www.google.com/url?q=https://youtu.be/hBcfMWuqZOE&sa=D&ust=1591585856197000", live: "https://www.google.com/url?q=https://river-app.herokuapp.com/&sa=D&ust=1591585856197000", description:"Web application that allows users to sign up and view what is streaming from their favorite streaming services.", features: ["react-redux", "react router", "hooks"], class: 'river'}, 
  {name:"double dog", github:"https://www.google.com/url?q=https://github.com/marsbhoward/double-dog-mobile&sa=D&ust=1591916754824000", video: "https://www.google.com/url?q=https://youtu.be/GpdSvp4Eu3s&sa=D&ust=1591916754824000", live: "https://www.google.com/url?q=https://double-dog-mobile.herokuapp.com&sa=D&ust=1591916754824000", description:"A group dare roulette game that incentivizes competitive play by declaring a winner.", features: ["javascript", "promises", "api calls"], class: 'doubleDog'}, 
  {name:"matchmaking", github:"https://www.google.com/url?q=https://github.com/marsbhoward/Matchmaking&sa=D&ust=1591916754825000", video: "https://www.google.com/url?q=https://youtu.be/V45Z_3y1QqQ&sa=D&ust=1591916754825000", live: "", description: "Website that allows users to sign up and connect to other users based on the games they play.", features: ["ruby on rails", "restful routes", "oauth"], class: 'matchmaking'}
]
let projectsList

class ProjectsList extends Component {

  constructor(props){
    super(props)
    this.state = {description: "hover over the featured projects to learn more about them. click on the project to get more indeph information."}
  }

  description = (text) => {
    this.setState({
        description: text
      })
  }

  render() {
    projectsList = projects.map((project, index) => {
      return <Projects key={index} toggleDisplay= {this.props.toggleDisplay} project={project} description= {this.description}/>
    })
    return(
    	<div className="projects">
    	  {projectsList}    	  
    	</div>
    )
  }
}

export default ProjectsList