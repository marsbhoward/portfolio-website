import React, { useLayoutEffect, useState ,useEffect} from 'react';
import ReactDOM from 'react-dom'

function MoreInfo(){
	return(
		<div className= "moreInfo">
			<h3 className= "subHeader">Concept</h3>
			<p>
				I ended up going to a friend's house for a New Years party one year, and we wound up playing one of those drinking card games. I begun to think on how I could improve on this concept. First thing I thought was that an app with a random number generator would be more efficient than a (probably reluctant) designated dealer. Second, I wanted the app to be (mostly) self contained. So if a dare involves a coin flip or anything timer related a pop up appears with the corresponding tool. The biggest ideal I wanted to incorporate was a bit of competitiveness, mixed with risk vs reward, and the thrill of victory. To achieve this I gave each game a cap of 10 points and each dare a point value ranging from -1 to 3 and a shot value ranging from 1 to 3 depending on how extreme the dare is. The caveat, however is that a player can not pass a dare if doing so will put them below zero and must either do the dare or take the amount of shots that is presented. So a player has to juggle what they are willing to do, their score, and their alcohol intake.
			</p>
			<h3>Under The Hood</h3>
			<p>
				As mentioned above I used Ruby on Rails to build out an application programming interface (API). Here I built out associations between game and player models. I also created join tables to preserve the history of game’s turns and a player’s turns.  
			</p>
		</div>
	)
}
export default MoreInfo