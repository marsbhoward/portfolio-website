import React, { useLayoutEffect, useState ,useEffect} from 'react';
import ReactDOM from 'react-dom'


function MoreInfo(){
	return(
		<div className= "moreInfo">
	 		<div className= "section"> 
				<h3 className= "subHeader">Concept</h3>
				<p>
					Whenever I'm with family or friends and we decide to watch a movie we never have one in mind. We jump in and out of apps trying to weigh our options and view the trailers, eventually the routine becomes more time consuming than the movie we actually want to enjoy. So I designed this application to consolidate the most popular movies across multiple streaming platforms and streamline the process. From the selected movie’s page you can view trailers, ratings, and more.
				</p>
			</div>
			<div className='sketches'>
				<img className='sketch' src={require('../../images/riverSketch1.png')} alt="sketch"/>
				<img className='sketch' src={require('../../images/riverSketch2.png')} alt="sketch"/>
				<img className='sketch' src={require('../../images/riverSketch3.png')} alt="sketch"/>
			</div>
			<div className= "section"> 
				<h3>Under The Hood</h3>
				<p>
					For this single page web application (SPA) I utilized Ruby on Rails to build out a database that consists of the streaming service providers, a model for the users and streams, and a web scraper built on Nokogiri to gather the lists of movies from the internet. 

					To form the frontend side of River I used ReactJS + Redux and Thunk. In addition to these I used Auth0 to handle secure logins via email and Facebook. 
					<br/>
					<br/>
					On the route to collect the necessary info for the movie titles I scraped on the backend, I had to chain multiple fetch requests to collect targeted data from omdbapi.com (an imdb api source) and send that data to YouTube’s api to gather the movie trailer before patching the collected data back to my backend api.
				</p>
			</div>
		</div>
	)
}
export default MoreInfo