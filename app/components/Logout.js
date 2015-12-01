import React from 'react'
import { Link, History } from 'react-router'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import auth from '../auth'

export default React.createClass({
	mixins: [History],

	componentDidMount() {
		auth.logout();
		this.history.replaceState(null, '/?loggedOut=true')
	},

	render() {
		return <div/>
	}
});
