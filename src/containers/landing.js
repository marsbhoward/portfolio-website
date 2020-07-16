import React from "react";
import {Spring} from 'react-spring/renderprops'
import { withRouter } from 'react-router-dom'

const Landing = withRouter(({ history }) => {

return(
	<div className="landingPage">
		<div className="greeting">
			<h1 className="greetingText">Hi, I'm</h1>
			<h1 className="greetingText">Mars. Software Engineer</h1>
		</div>
		<div className="landingImage">
		</div>
		<div className="continue" onClick={() => { history.push('/featured') }}>
		</div>
	</div>
);
});

export default Landing;