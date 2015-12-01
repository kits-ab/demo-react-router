import React from 'react'
import { Link } from 'react-router'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

export default React.createClass({
	render() {

		let { query } = this.props.location;
		var message;
		if (query && query.loggedOut) {
			message = <div className="c-message">You are now logged out</div>;
		}

		return (
				<div>
					{message}
					<h1>
						Welcome to the<br/>
						React Router Demo
					</h1>
					<p className="c-intro">
						This demo shows how React Router can be used to let the url drive the state of a web
						application. This will let users bookmark, reload and navigate the application using the
						built-in controls of the browser.
					</p>

					<div className="c-entrypoint">
						<div className="c-entrypoint__wrapper">
							<div className="c-entrypoint__column">
								<h2>Learn about the demo</h2>
								<p>
									The source code for this demo is available
									on <a href="https://github.com/kits-ab/demo-react-router">GitHub</a> and all of the
									steps necessary to create it is explained in detail on my company's blog.
								</p>
								<p className="c-entrypoint__button">
									<a className="c-button" href="http://kits.se/blogg/react-router">Read the blog post</a>
								</p>
							</div>
							<div className="c-entrypoint__column">
								<h2>Run the demo</h2>
								<p>
									You are already running the demo since this page is part of it but to run the real
									application log in with the username '<b>user</b>' and password '<b>password</b>'.
								</p>
								<p className="c-entrypoint__button">
									<Link to="/login" className="c-button">Log in</Link>
								</p>

								<ReactCSSTransitionGroup transitionName="expand"
										transitionEnterTimeout={300} transitionLeaveTimeout={300}>
									{this.props.children}
								</ReactCSSTransitionGroup>
							</div>
						</div>
					</div>
				</div>
		)
	}
});
