import React, { useState } from 'react'
import {Spring} from 'react-spring/renderprops'
import { withRouter } from 'react-router-dom'
import { useSpring, animated } from 'react-spring'

const Landing = withRouter(({ history }) => {
  const [state, toggle] = useState(true)
  const { x } = useSpring({ from: { x: 0 }, x: state ? 1 : 0, config: { duration: 1000 } })	

  return(
	<div className="landingPage">
		<div className="greeting"onMouseMove={() => toggle(!state)}>
			<h1 className="greetingText">Hi, I'm</h1>
			<h1 className="greetingText">Mars. Software Engineer</h1>
		</div>
		<div className="landingImage">
		</div>
	    <div>
  			<animated.div
    			style={{
      			transform: x
        		.interpolate({
          			range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
          			output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1]
        		})
        		.interpolate(x => `scale(${x})`)
    			}}>
	    			<div className="continue" onClick={() => { history.push('/featured') }}>
					</div>
  			</animated.div>
		</div>
	</div>
  );
});

export default Landing;
