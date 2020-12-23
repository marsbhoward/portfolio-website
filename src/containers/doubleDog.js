import React, { Component } from 'react';
import Headliner from '../components/doubleDog/headliner';
import Main from '../components/doubleDog/main';
import MoreInfo from '../components/doubleDog/moreInfo';

class DoubleDog extends Component {

  componentDidMount() {
    this.props.pageSwitch("/project")
    console.log(this)
  }

	render() {
		return(
			<div className="projectPage">
				<Headliner />
				<Main />
				<MoreInfo />
			</div>
		)
	}
}
export default DoubleDog