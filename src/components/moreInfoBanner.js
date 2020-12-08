import React, { Component } from 'react';

class MoreInfo extends Component {
	
	render() {
		let feats = JSON.parse(localStorage.getItem("features"));
		return(
			<div className= "moreInfoBanner">
				<h1>{sessionStorage.currentProject}</h1>
				<p className = "inGrid underline">Links</p>
				<p className = "inGrid remove"><a href={sessionStorage.github}>github</a></p>
				<p className = "inGrid remove"><a href={sessionStorage.demo}>video</a></p>
			</div>
		)
	}
}

export default MoreInfo