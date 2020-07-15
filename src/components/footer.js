import React from "react";
import { withRouter } from 'react-router-dom'

const Footer = withRouter(({ history }) => {

return (
  	<div className="footer">
  		<span className="profileButton" onClick={() => { history.push('/') }}>featured</span>
  		<span className="streamsButton" onClick={() => { history.push('/about') }}>about</span>
	</div>		
);
});

export default Footer;