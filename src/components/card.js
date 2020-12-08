import React from 'react'
import { useSpring, animated } from 'react-spring'

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

const Card = ({name,classN,mouseEnter,mouseExit,description,handleClick, underline}) => {
  const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))


  if (classN === "onlight"){
    	return(
    	  <animated.div
        	className= {classN}
        	onMouseEnter={mouseEnter}
        	onClick= {(() => mouseEnter, handleClick)}
        	onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
        	onMouseLeave={(() => set({ xys: [0, 0, 1] }),mouseExit)}
        	style={{ transform: props.xys.interpolate(trans) }}
        >
        <h4 className= {underline}>{name}</h4>
        {description}
        </animated.div>
    	)}
    	else{
    	
    	  return (
    	    <animated.div
    	      className= {classN}
              onClick= {(() => mouseEnter, handleClick)}
    	      onMouseEnter={mouseEnter}
    	      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(0, 0) })}
    	      onMouseLeave={(() => set({ xys: [0, 0, 1] }),mouseExit)}
    	      
    	    />
    	  )}
}

export default Card
