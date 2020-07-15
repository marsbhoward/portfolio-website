import React, { Component } from 'react';
import me from '../images/Me.JPG';

class About extends Component {	

	render() {
		let intro = "I am a software engineer based out of Brooklyn, NY"
		let bio = "I enjoy taking concepts and developing them into full experiences. When I'm not coding or blogging on instagram, you'll find me binging a show, gaming, or just exploring NYC."
		return(
			<div className= "about">
				<div className= "AFlex">
					<div className= "inFlex">
						<h1 className= "head">Hello World!</h1>
						<h3 className= "intro">{intro}</h3>
						<h5 className= "bio">{bio}</h5>
					</div>
					<img className="myPic inFlex" alt="Mars Howard" src={me}></img>
				</div>
			</div>
		)
	}
}

export default About