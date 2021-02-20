/** @jsx jsx */
import React, { useState, useEffect, useRef } from 'react'
import { css, jsx } from '@emotion/react'
import SliderContent from './sliderContent'
import Slide from './slide'
import Arrow from './arrow'
import Window from '../window'


/**
 * @function Slider
 */
const Slider = props => {
const [cssWidth, setCssWidth] = useState('80vw')
const [windowWidth, setWindowWidth] = useState(getWindowDimensions());
const getWidth = () => window.innerWidth

  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width
    };
  }


  useEffect(() => {
    console.log(windowWidth);  
    function handleResize() {
      setWindowWidth(getWindowDimensions()); 
      console.log(getWindowDimensions());

    if (getWindowDimensions().width > 957){
      setCssWidth ('80vw');
      console.log('large')
    }
    else{
      setCssWidth ('76vw');
      console.log('small')
    }    

    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const [state, setState] = useState({
    activeIndex: 0,
    translate: 0,
    transition: 0.45
  })

  const { translate, transition, activeIndex } = state

  const nextSlide = () => {
    if (activeIndex === props.slides.length - 1) {
      return setState({
        ...state,
        translate: 0,
        activeIndex: 0
      })
    }

    setState({
      ...state,
      activeIndex: activeIndex + 1,
      translate: (activeIndex + 1) * getWidth()
    })
  }

  const prevSlide = () => {
    if (activeIndex === 0) {
      return setState({
        ...state,
        translate: (props.slides.length - 1) * getWidth(),
        activeIndex: props.slides.length - 1
      })
    }

    setState({
      ...state,
      activeIndex: activeIndex - 1,
      translate: (activeIndex - 1) * getWidth()
    })
  }

  return (
    <div css={SliderCSS(cssWidth)}>
      <SliderContent
        translate={translate}
        transition={transition}
        width={getWidth() * props.slides.length}
      >
        {props.slides.map((slide, i) => (
          <Slide key={slide + i} content={slide} />
        ))}
      </SliderContent>

      <Arrow direction="left" handleClick={prevSlide} />
      <Arrow direction="right" handleClick={nextSlide} />
    </div>
  )
}



function SliderCSS(width) {
  console.log(width)
  return( css`
  position: relative;
  object-fit:cover;
  height: 80vh;
  width: ${width};
  margin: 0 auto;
  overflow: hidden;
`)
}
export default Slider