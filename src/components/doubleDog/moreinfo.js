import React, { useLayoutEffect, useState ,useEffect} from 'react';
import ReactDOM from 'react-dom'

function MoreInfo(){
	return(
		<div className= "moreInfo">
			<div className= "section"> 
				<h3 className= "subHeader">Concept</h3>
				<text>
					I ended up going to a friend's house for a New Years party one year, and we wound up playing one of those drinking card games. I begun to think on how I could improve on this concept. First thing I thought was that an app with a random number generator would be more efficient than a (probably reluctant) designated dealer. Second, I wanted the app to be (mostly) self contained. So if a dare involves a coin flip or anything timer related a pop up appears with the corresponding tool. The biggest ideal I wanted to incorporate was a bit of competitiveness, mixed with risk vs reward, and the thrill of victory. To achieve this I gave each game a cap of 10 points and each dare a point value ranging from -1 to 3 and a shot value ranging from 1 to 3 depending on how extreme the dare is. The caveat, however is that a player can not pass a dare if doing so will put them below zero and must either do the dare or take the amount of shots that is presented. So a player has to juggle what they are willing to do, their score, and their alcohol intake.
					<br/>
					<br/>
					Originally I mapped out two interfaces one for the browser and one for mobile before deciding to keep the later for both instances.					
				</text>
			</div>
			<div className='sketches'>
				<img className='sketch' src={require('../../images/DDsketch1.png')} alt="sketch"/>
				<img className='sketch' src={require('../../images/DDsketch2.png')} alt="sketch"/>
				<img className='sketch' src={require('../../images/DDsketch3.png')} alt="sketch"/>
			</div>
			<div className= "section"> 
				<h3>Under The Hood</h3>
				<p>
					As mentioned above I used Ruby on Rails to build out an application programming interface (API). Here I built out associations between game, dare, and player models. I also created join tables to preserve the history of a game’s turns and a player’s turns. I manually created and seeded each dare and balanced the point and shot values to match the extremeness of a dare. 
When starting a game players are prompted to enter their names which calls the create method first from the games controller and then from the players controller. This adds a game record and a player record to that game. Once all players are entered and a game begins, a random number generator is used to gather a number that corresponds with a record of a dare.
				</p>
			</div>
		</div>
	)
}
export default MoreInfo