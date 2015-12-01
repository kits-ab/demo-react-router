import React from 'react'
import { Link, History } from 'react-router'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import auth from '../auth'

export default React.createClass({
	mixins: [History],

	getInitialState() {
		return {
			error: false
		};
	},

	handleSubmit(event) {
		event.preventDefault();

		const user = this.refs.user.value;
		const pass = this.refs.pass.value;

		auth.login(user, pass, (loggedIn) => {
			if (!loggedIn) {
				return this.setState({
					error: true
				});
			}

			const { location } = this.props;

			if (location.state && location.state.nextPathname) {
				this.history.replaceState(null, location.state.nextPathname);
			} else {
				this.history.replaceState(null, '/links/public');
			}
		});
	},

	render() {
		return (
				<div className="c-login">
					<form className="c-login__form" onSubmit={this.handleSubmit}>
						<label className="c-login__label" htmlFor="user">Username</label>
						<input id="user" className="c-login__input" ref="user" type="text" placeholder="user"/>
						<label className="c-login__label" htmlFor="pass">Password</label>
						<input id="pass" className="c-login__input" ref="pass" type="text" placeholder="password"/>
						{this.state.error && (
								<p className="c-login__error">Invalid username or password.</p>
						)}
						<button className="c-login__button" type="submit">
							<img alt="Login" src="/images/login.svg"/>
						</button>
					</form>
				</div>
		)
	}
});
