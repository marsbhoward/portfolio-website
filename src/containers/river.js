import React, { Component } from 'react';
import Headliner from '../components/river/headliner';
import Main from '../components/river/main';
import MoreInfo from '../components/river/moreInfo';

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
				<MoreInfo />
			</div>
		)
	}
}
export default River