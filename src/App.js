import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route, Redirect,useHistory
} from 'react-router-dom';

import Homepage from './containers/homepage';
import About from './containers/about';
import Landing from './containers/landing';
import Background from './components/background';
import Navbar from './components/navbar';
import Footer from './components/footer';
import 'semantic-ui-css/semantic.min.css'

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




  render(){
    return(
      <Router>
        <Route exact path="/" render={() => <Landing/>} />  
        <Route path="/featured" render={() => <div className="homeBase"><Background currentPage={this.state.currentPage}/> <Footer/></div>} />            
        <Route exact path="/featured" render={() =><div className="home"> <Navbar currentPage={this.state.currentPage}/> <Homepage pageSwitch={this.pageSwitch}/> </div> }/>
        <Route path="/about" render={() => <div className="homeBase"><Background currentPage={this.state.currentPage}/> <Footer/></div>} />
        <Route exact path="/about" render={() =><div className="home"> <Navbar currentPage={this.state.currentPage}/> <About pageSwitch={this.pageSwitch}/> </div> } />
      </Router>
    );
  }
}

export default App;
