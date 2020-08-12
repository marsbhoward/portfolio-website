import React, { Component } from 'react';

class MoreInfo extends Component {
	handleClick = () => {
  	this.setState({
  		clicked: 'yes'
  	})
  }
	
	render() {
		let live = ""
		let feats = JSON.parse(localStorage.getItem("features"));
		if (localStorage.live !== ""){
			live = <p className = "inGrid remove"><a href={localStorage.live}>site</a></p>
		}
		return(
			<div className= "moreInfo">
				<button className = "closer" onClick= {this.props.closeDispaly}>x</button>
				<div className= "grid2">
				<div className = "grid">
					<p className = "inGrid underline">Links</p>
					<p className = "inGrid remove"><a href={localStorage.github}>github</a></p>
					<p className = "inGrid remove"><a href={localStorage.demo}>video</a></p>
					{live}
				</div>
				<div className = "grid">
					<p className = "inGrid underline">Key Features</p>
					<p className = "inGrid remove">{feats[0]}</p>
					<p className = "inGrid remove">{feats[1]}</p>
					<p className = "inGrid remove">{feats[2]}</p>
				</div>
			</div>								
			</div>
		)
	}
}

export default MoreInfo