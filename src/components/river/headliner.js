import React, { useLayoutEffect, useState ,useEffect} from 'react';
import $ from "jquery";


function Headliner(){
	const [count, setCount] = useState(0);
	const [divHeight, setDivHeight] = useState ($('.headliner').height());
	const [prevDivHeight, setPrevDivHeight] = useState (0);

  	useLayoutEffect(() => {
    //	window.addEventListener('resize', heightCheck());
    }, [])

  	useEffect(()=> {
 		//$('.example').css('height', ($('.headliner').height() +6) + 'px');
		//setDivHeight($('.headliner').height())

  		setNewCount()
  	}, [])

  

	function heightCheck() {
		console.log("current " + divHeight)
		console.log("prev " + prevDivHeight)
		setPrevDivHeight(divHeight)

		console.log("new prev " + prevDivHeight)
		//this.setState({divHeight: $('.headliner').height()})
		$('.example').css('height', ($('.headliner').height() +6) + 'px');
		setDivHeight($('.headliner').height())


		
		
		//$('.headliner').css('height', $('.headliner').height() + 'px');		
	}

	function logHeight() {
		if (prevDivHeight !== divHeight){
				window.location.reload()
				
			}
		//window.location.reload()
	}

	function setNewCount() {
		setCount (count)
		console.log(count)
	}	
	
	
		return(
			<div className="flex-container">
				<div className="headliner">
					<h1 className="riverTitle">River
						<hr></hr>
					</h1>
					<div className= "description">
						Whenever I'm with family or friends and we decide to watch a movie we never have one in mind. We jump in and out of apps trying to weigh our options and view the trailers, eventually the routine becomes more time consuming than the movie we actually want to enjoy. So I designed this application to consolidate the most popular movies across multiple streaming platforms and streamline the process. From the selected movie’s page you can view trailers, ratings, and more.
					</div>
				</div>
				<div className= "example">
					<div className= "riverExample">
						<h3> Github: </h3>
						<h3> Live: </h3>
						<h3> Demo: </h3>
					</div>
				</div>
			</div>
		)
}
export default Headliner