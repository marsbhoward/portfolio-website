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
	

  //{name:"river", github:"https://www.google.com/url?q=https://github.com/marsbhoward/river&sa=D&ust=1591585856197000", video: "https://www.google.com/url?q=https://youtu.be/hBcfMWuqZOE&sa=D&ust=1591585856197000", live: "https://www.google.com/url?q=https://river-app.herokuapp.com/&sa=D&ust=1591585856197000", description:"Web application that allows users to sign up and view what is streaming from their favorite streaming services.", features: ["react-redux", "react router", "hooks"], class: 'river'}, 
  //{name:"double dog", github:"https://www.google.com/url?q=https://github.com/marsbhoward/double-dog-mobile&sa=D&ust=1591916754824000", video: "https://www.google.com/url?q=https://youtu.be/GpdSvp4Eu3s&sa=D&ust=1591916754824000", live: "https://www.google.com/url?q=https://double-dog-mobile.herokuapp.com&sa=D&ust=1591916754824000", description:"A group dare roulette game that incentivizes competitive play by declaring a winner.", features: ["javascript", "promises", "api calls"], class: 'doubleDog'}, 
  //{name:"matchmaking", github:"https://www.google.com/url?q=https://github.com/marsbhoward/Matchmaking&sa=D&ust=1591916754825000", video: "https://www.google.com/url?q=https://youtu.be/V45Z_3y1QqQ&sa=D&ust=1591916754825000", live: "", description: "Website that allows users to sign up and connect to other users based on the games they play.", features: ["ruby on rails", "restful routes", "oauth"], class: 'matchmaking'}	
	
		return(
			<div className="flex-container">
				<div className="headliner">
					<h1 className="riverTitle">River
						<hr></hr>
					</h1>
					<div className= "description">
						This website was created for my final project at Flatiron School. This was special for me because I created  a web scrapping command line interface (CLI) that presented Netflix movies for my first project and with this web app I was able to bring the vision I had to life. 
					</div>
				</div>
				<div className= "example">
					<div className= "riverExample">
						<h2> <a href={sessionStorage.github}>Github</a></h2>
						<h2> <a href={sessionStorage.live}>Live</a> </h2>
						<h2> <a href={sessionStorage.demo}>Demo</a></h2>						
					</div>
				</div>
			</div>
		)
}
export default Headliner