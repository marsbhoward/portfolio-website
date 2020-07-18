import React, { Component } from 'react';
import { useRef } from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import Homepage from './containers/homepage';
import About from './containers/about';
import Landing from './containers/landing';
import Test from './containers/test';
import Background from './components/background';
import Navbar from './components/navbar';
import Footer from './components/footer';
import 'semantic-ui-css/semantic.min.css'
import clamp from 'lodash-es/clamp'
import { useSprings, animated } from 'react-spring'
import { useGesture } from 'react-use-gesture'

class App extends Component { 

  componentDidMount() {
    
  }   

  constructor(props){
    super(props)
    this.pageSwitch = this.pageSwitch.bind(this)
    this.state = {
      currentPage: "/",
    }
  }

  pageSwitch(page) {
    this.setState({currentPage: page});
    console.log(page)
  }

  app = () => {
    console.log('state changed')
    console.log(this)
    this.setState({
      hover: true
    });
  }

  Viewpager = () => {
  let pages = ['featured','about']    
  const index = useRef(0)
  const [props, set] = useSprings(pages.length, i => ({ x: i * window.innerWidth, sc: 1, display: 'block' }))
  const bind = useGesture(({ down, delta: [xDelta], direction: [xDir], distance, cancel }) => {
    if (down && distance > window.innerWidth / 2)
      cancel((index.current = clamp(index.current + (xDir > 0 ? -1 : 1), 0, pages.length - 1)))
    set(i => {
      if (i < index.current - 1 || i > index.current + 1) return { display: 'none' }
      const x = (i - index.current) * window.innerWidth + (down ? xDelta : 0)
      const sc = down ? 1 - distance / window.innerWidth / 2 : 1
      return { x, sc, display: 'block' }
    })
  })
  return props.map(({ x, display, sc }, i) => (
    <animated.div {...bind()} key={i} style={{ display, transform: x.interpolate(x => `translate3d(${x}px,0,0)`) }}>
      <animated.div style={{ transform: sc.interpolate(s => `scale(${s})`), backgroundImage: `url(${pages[i]})` }} />
    </animated.div>
  ))    
  }


  render(){
    return(
      <Router>
        <Route exact path="/" render={() => <Landing/>} />  
        <Route path="/featured" render={() => <div className="homeBase"><Background currentPage={this.state.currentPage}/> <Footer/></div>} />            
        <Route exact path="/featured" render={() =><div className="home"> <Navbar currentPage={this.state.currentPage}/> <Homepage pageSwitch={this.pageSwitch}/> </div> }/>
        <Route path="/about" render={() => <div className="homeBase"><Background currentPage={this.state.currentPage}/> <Footer/></div>} />
        <Route exact path="/about" render={() =><div className="home"> <Navbar currentPage={this.state.currentPage}/> <About pageSwitch={this.pageSwitch}/> </div> } />
        <Route exact path="/test" render={() => <Test/> } />
      </Router>
    );
  }
}

export default App;
