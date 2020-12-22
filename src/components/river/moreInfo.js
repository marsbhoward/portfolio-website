import React, { useLayoutEffect, useState ,useEffect} from 'react';
import ReactDOM from 'react-dom'

function MoreInfo(){
	return(
		<div className= "moreInfo">
			<h3 className= "subHeader">Concept</h3>
			<p>
				Whenever I'm with family or friends and we decide to watch a movie we never have one in mind. We jump in and out of apps trying to weigh our options and view the trailers, eventually the routine becomes more time consuming than the movie we actually want to enjoy. So I designed this application to consolidate the most popular movies across multiple streaming platforms and streamline the process. From the selected movie’s page you can view trailers, ratings, and more.
			</p>
			<h3>Under The Hood</h3>
			<p>
				For this single page web application (SPA) I utilized Ruby on Rails to build out a database that consists of the streaming service providers
			</p>
		</div>
	)
}
export default MoreInfo