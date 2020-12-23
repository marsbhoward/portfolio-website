import React, { useLayoutEffect, useState ,useEffect} from 'react';
import ReactDOM from 'react-dom'
import Slider from '../slider/slider';
import photo1 from '../../images/doubleDog1.png';
import photo2 from '../../images/doubleDog2.png';
import photo3 from '../../images/doubleDog3.png';
import photo4 from '../../images/doubleDog4.png';
import photo5 from '../../images/doubleDog5.png';




const images = [
  photo1,
  photo2,
  photo3,
  photo4,
  photo5
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