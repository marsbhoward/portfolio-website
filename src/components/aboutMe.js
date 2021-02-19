import React, { Component } from 'react';
import me from '../images/Me.JPG';

class About extends Component {	

	render() {
		let intro = "I am a software engineer based out of Brooklyn, NY"
		let bio = "I first began programming with QBasic in 2008 and it has grown into a major passion. I enjoy the journey of taking concepts and bringing them to life."+ "\n" + " I specialize in Ruby and Javascript but have experience working with C++, Java, C#, Visual Basic, Objective C, and pseudocode :)"
		let misc = "Proud member of House Gryffindor"
		return(
			<div className= "about">
				<div className= "AFlex">
					<div className= "inFlex">
						<h1 className= "head">Hello World!</h1>
						<h3 className= "intro">{intro}</h3>
						<h3 className= "bio">{bio}</h3>
						<h3> Currently I am a Flatiron School <a href="https://flatironschool.com/jsf/?mkt_tok=eyJpIjoiWXpRek16WmxOREJqWW1NMiIsInQiOiJvdlVtQjRjMm1mSHdqeVwveEc5NTdmNEhlc3I2N25PQ1VGVmZKMXN0R1I2U3FCVktHV2dxUDZxU1hZbVgyOVBiMGEwS2kyUmY4alwvRmhyT1A3QnQ2cGhSbFo2QTBwUFJVSmVPa0VzNjVKUDVWeDRiaFo3eUUxdmNNMDRvSk1uNU9RIn0%3D">John Stanley Ford candidate</a> </h3>
					</div>
					<div className="inFlex">
						<img className="myPic" alt="Mars Howard" src={me}></img>
						<h3 className= "bio list">
							Proud member of House Gryffindor
							<p>{`\n`}</p>
							<hr></hr>
							<p>{`\n`}</p>
							Semi-casual World of Warcraft player
							<p>{`\n`}</p>
							<hr></hr>
							<p>{`\n`}</p>
							Favorite Movie: 3 way tie between Cloud Atlas, Fight Club, and Revenge of the Sith
						</h3>
					</div>
				</div>
			</div>
		)
	}
}

export default About