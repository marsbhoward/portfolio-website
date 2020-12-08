import React, { Component } from 'react';
import Featured from '../components/featured';
import MoreInfo from '../components/moreInfo';
import MoreInfoBanner from '../components/moreInfoBanner';
import {Spring} from 'react-spring/renderprops'
class Homepage extends Component {

  constructor(props){
    super(props)
    this.state = {
      display: false
    }
  
  }

  componentDidMount() {
    this.props.pageSwitch("/")
  }

  toggleDisplay = () => {
	 this.setState({
      display: true
     })
  }

  closeDispaly = () => {
	 this.setState({
      display: false
     })
  }

  hoverDisplay = (project) => {
  	this.setState({
  		currentProject: project
  	})
  	console.log(project)
  }

	render() {
		let displayInfo
		if (this.state.display === true){
			displayInfo = <MoreInfo closeDispaly= {this.closeDispaly} />
		}
		else{
			displayInfo = ""
		}
		return(
      <Spring
      from={{marginTop:-500}}
      to={{marginTop:0}}>
      {props=>
  			<div style={props} className= "homepage"> 
  				<h3 className="header">mars howard</h3>
  				<h3 className="title"> Mars Howard</h3>
  				<div className = "flex">
  					<Featured toggleDisplay= {this.toggleDisplay} hoverDisplay= {this.hoverDisplay}/>
  				</div>
  				{displayInfo}
  			</div>
      }
      </Spring>  
		)
	}
}

export default Homepage