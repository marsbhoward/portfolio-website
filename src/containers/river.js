import React, { Component } from 'react';
import Headliner from '../components/river/headliner';
import Main from '../components/river/main';

class River extends Component {

  componentDidMount() {
    this.props.pageSwitch("/project")
    console.log(this)
  }

	render() {
		return(
			<div className="riverPage">
				<Headliner />
				<Main />
			</div>
		)
	}
}
export default River