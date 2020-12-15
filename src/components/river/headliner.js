import React, { useLayoutEffect, useState ,useEffect} from 'react';
import $ from "jquery";


function Headliner(){
	const [divHeight, setDivHeight] = useState (0)
	const [prevDivHeight, setPrevDivHeight] = useState (0)

  	useLayoutEffect(() => {
  		$('.example').css('height', ($('.headlinder').height() +6) + 'px');
		setDivHeight($('.headlinder').height())
		
    	window.addEventListener('resize', heightCheck());

    })



	function heightCheck() {
		console.log("current " + divHeight)
		console.log("prev " + prevDivHeight)
		setPrevDivHeight(divHeight)
		console.log("new prev " + prevDivHeight)
		//this.setState({divHeight: $('.headlinder').height()})
		$('.example').css('height', ($('.headlinder').height() +6) + 'px');
		setDivHeight($('.headlinder').height())
		
		
		//$('.headlinder').css('height', $('.headlinder').height() + 'px');		
	}

	function logHeight() {
		if (prevDivHeight !== divHeight){
				window.location.reload()
				
			}
		//window.location.reload()
	}
	
	
		return(
			<div className="flex-container">
				<div className="headlinder">
					<h1 className="riverTitle">River
						<hr></hr>
					</h1>
					<p className= "description">
						Whenever I'm with family or friends and we decide to watch a movie we never have one in mind. We jump in and out of apps trying to weigh our options and view the trailers, eventually the routine becomes more time consuming than the movie we actually want to enjoy. So I designed this application to consolidate the most popular movies across multiple streaming platforms and streamline the process. From the selected movie’s page you can view trailers, ratings, and more.
					</p>
				</div>
				<div className= "example">
					<h1 className="riverExample"> example </h1>
				</div>
			</div>
		)
}
export default Headliner