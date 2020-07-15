import React, { Component } from 'react';
import emailB from '../images/email.png';
import githubB from '../images/github.png';
import instagramB from '../images/instagram.png';
import linkedinB from '../images/linkedin.png';
import twitterB from '../images/twitter.png';
import formB from '../images/form.png';
import menuB from '../images/menu.png';
import closeB from '../images/close.png';
import black from '../images/black.svg';

import emailC from '../images/email-alt.png';
import githubC from '../images/github-alt.png';
import instagramC from '../images/instagram-alt.png';
import linkedinC from '../images/linkedin-alt.png';
import twitterC from '../images/twitter-alt.png';
import formC from '../images/form-alt.png';
import menuC from '../images/menu-alt.png';
import closeC from '../images/close-alt.png';


import { Image, Reveal, Label } from 'semantic-ui-react'

let email;
let github;
let instagram;
let linkedin;
let twitter;
let form;
let menu;
let closeMenu;
let labelText;
let hoverState = "";
let navbar;

class Navbar extends Component {

	constructor(props){
    	super(props)
    	this.state = {
    		hover: false,
    		pageWidth: window.innerWidth,
    		emailText: 'email',
    		menu: 'open',
    		menuClass: 'inMenu hide',
    		menuIcon: menuC
    	}
  	}

  componentDidMount() {
	window.addEventListener('resize', this.updateDimensions);
  } 

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
  }

   updateDimensions = () => {
    this.setState({ pageWidth: window.innerWidth});
  };

  handleOnClick = (icon) => {
    switch (icon) {
    	case 'instagram':
    		// statements_1
    		window.open('https://www.instagram.com/sixtyone19/')
    		break;
    	case 'github':
    		window.open('https://github.com/marsbhoward')
    		break;
   		case 'linkedin':
    		// statements_1
    		window.open('https://www.linkedin.com/in/mars-howard/')
    		break;
   		case 'twitter':
    		// statements_1
    		window.open('https://www.twitter.com/marsbhoward')
    		break;
   		case 'form':
    		// statements_1
    		window.open('https://docs.google.com/document/d/e/2PACX-1vS5GEPeoGakdw4uXHPwfp4jWE-0NeBMVgMmFvT4mkJiW5NMMP9iAzrY0oss4EeC-w/pub')
    		break;    		       		    		
    	default:
    		// email
    		this.copyText()
    		this.setState({emailText: "email copied to clipboard"})
			setTimeout(() => {
		  		this.setState({emailText: "email"})
			}, 1500);    		
    		break;
    }
  }

  navbarSwitch = () => {
  	if (this.state.pageWidth > 957){
  		this.navbarLong()
  	}
  	else{
  		this.NavbarShort()
  	}
  }

  navbarLong = () => {
	let page = this.props.currentPage
		switch (page) {
			case "/about":
				email = emailC
				github = githubC
				instagram = instagramC
				linkedin = linkedinC
				twitter = twitterC
				form = formC
				menu = menuC
				closeMenu = closeC				 		
				break;
			default:
				email = emailB
				github = githubB
				instagram = instagramB
				linkedin = linkedinB
				twitter = twitterB
				form = formB
				menu = menuB
				closeMenu = closeB								
				break;
		}


  		navbar=	 <div className ="navbar">
				 	<Reveal animated='small fade' className="inNavbar">
			    		<Reveal.Content visible>
				      		<Image onMouseEnter={this.hoverEnter} onMouseLeave={this.hoverExit} onClick={() => this.handleOnClick('email'), this.hoverClick} circular size='mini' src= {black} className="fade" />			      		
				    	</Reveal.Content> 		    	
				    	<Reveal.Content hidden>
				      		<Image  circular size='mini' src= {email} />
				    	</Reveal.Content>
				  	</Reveal>	    
				 	<Reveal animated='small fade' className="inNavbar">
				    	<Reveal.Content hidden>
				      		<Image circular size='mini' src= {github} />
				    	</Reveal.Content>
				    	<Reveal.Content visible>
				      		<Image onClick={() => this.handleOnClick('github')} circular size='mini' src= {black} className="fade" />
				    	</Reveal.Content>    	
				  	</Reveal>
				 	<Reveal animated='small fade' className="inNavbar">
				    	<Reveal.Content hidden>
				      		<Image circular size='mini' src= {instagram} />
				    	</Reveal.Content>
				    	<Reveal.Content visible>
				      		<Image onClick={() => this.handleOnClick('instagram')} circular size='mini' src= {black} className="fade" />
				    	</Reveal.Content>    	
				  	</Reveal>	
				 	<Reveal animated='small fade' className="inNavbar">
				    	<Reveal.Content hidden>
				      		<Image circular size='mini' src= {linkedin} />
				    	</Reveal.Content>
				    	<Reveal.Content visible>
				      		<Image onClick={() => this.handleOnClick('linkedin')} circular size='mini' src= {black} className="fade" />
				    	</Reveal.Content>    	
				  	</Reveal>	
				 	<Reveal animated='small fade' className="inNavbar">
				    	<Reveal.Content hidden>
				      		<Image circular size='mini' src= {twitter} />
				    	</Reveal.Content>
				    	<Reveal.Content visible>
				      		<Image onClick={() => this.handleOnClick('twitter')} circular size='mini' src= {black} className="fade" />
				    	</Reveal.Content>    	
				  	</Reveal>
				  	<Reveal animated='small fade' className="inNavbar">
				    	<Reveal.Content hidden>
				      		<Image circular size='mini' src= {form} />
				    	</Reveal.Content>
				    	<Reveal.Content visible>
				      		<Image onClick={() => this.handleOnClick('form')} circular size='mini' src= {black} className="fade" />
				    	</Reveal.Content>    	
				  	</Reveal>
				  	{hoverState}	  	  	  			 	  
			    </div> 			
  }

  NavbarShort = () => {
	let page = this.props.currentPage
		switch (page) {
			case "/about":
				menu = menuC
				closeMenu = closeC
				break;
			default:
				menu = menuB
				closeMenu = closeB	
				break;
			}  	

		navbar = <div className ="navbar">
			<Image onClick={() => this.menuClick()} circular size='mini' src= {this.state.menuIcon} />
			<div className= "menu">
				<div className={this.state.menuClass} onClick={() => this.handleOnClick('email')}>{this.state.emailText}</div>
				<div className={this.state.menuClass} onClick={() => this.handleOnClick('github')}>github</div>
				<div className={this.state.menuClass} onClick={() => this.handleOnClick('instagram')}>instagram</div>
				<div className={this.state.menuClass} onClick={() => this.handleOnClick('linkedin')}>linkedin</div>
				<div className={this.state.menuClass} onClick={() => this.handleOnClick('twitter')}>twitter</div>
				<div className={this.state.menuClass} onClick={() => this.handleOnClick('resume')}>resume</div>
			</div>
		</div>	
  }

  menuClick = () => {
  	console.log(this.state.menu)
  	if (this.state.menu === 'open'){
  		this.setState({menu: 'closed'})
  		this.setState({menuIcon: closeMenu})
  	}
  	else{
  		this.setState({menu: 'open'})
  		this.setState({menuIcon: menu})
  	}

	switch (this.state.menu) {
    	case 'open':
    		// remove hidden to inMenu divs
    		this.setState({menuClass: 'inMenu'}) 
    		break;    		       		    		
    	default:
    		// add hidden to inMenu divs 
    		  this.setState({menuClass: 'inMenu hide'})  		
    		break;
    }
  }

  hoverEnter = () => {
  	this.setState({
      hover: true
    });
  }

  hoverClick = () => {
  	this.setState({
      hover: "clicked"
    });
  }

  hoverExit = () => {
  	this.setState({
      hover: false
    });
  }

  copyText = () => {
  	  let email = "marsbhoward@icloud.com"
	  var copyhelper = document.createElement("input");
	  copyhelper.className = 'copyhelper'
	  document.body.appendChild(copyhelper);
	  copyhelper.value = email;
	  copyhelper.select();
	  document.execCommand("copy");
	  document.body.removeChild(copyhelper);
  }




	render() {
		switch (this.state.hover) {
			case true:
				labelText = "click to copy email to clipboard";
				hoverState = <Label pointing> {labelText} </Label>
				break;
			case "clicked":
				labelText = "email copied to clipboard" 
				hoverState = <Label pointing className="clicked"> {labelText} </Label>
				break;			
			default:
				hoverState = ""
				break;
		}
		this.navbarSwitch();
		return(navbar)
	}
}
export default Navbar