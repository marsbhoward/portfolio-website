import React, { useLayoutEffect, useState ,useEffect} from 'react';
import ReactDOM from 'react-dom'
import Slider from './slider';
import photo1 from '../../images/river1.png';
import photo2 from '../../images/river2.png';
import photo3 from '../../images/river3.png';
import photo4 from '../../images/river4.png';



const images = [
  photo1,
  photo2,
  photo3,
  photo4
]


function Main(){
	return(
		<div className= "main">
			<div className = "mainDisplay">
				<Slider slides={images} />
			</div>
		</div>
	)
}
export default Main