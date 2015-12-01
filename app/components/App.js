import React from 'react'
import { Link } from 'react-router'
import data from '../data'

export default React.createClass({
	render() {
		const counts = data.getCountForLists();

		return (
				<div className="c-app">
					<div className="c-app__navigation">

						<ul className="c-lists">
							<li>
								<Link activeClassName="is-active" className="c-lists__item" to="/links/all">
									<img src="/images/all.svg"/>All<span className="c-lists__count">{counts.all}</span>
								</Link>
							</li>
							<li>
								<Link activeClassName="is-active" className="c-lists__item" to="/links/private">
									<img src="/images/private.svg"/>Private<span className="c-lists__count">{counts.private}</span>
								</Link>
							</li>
							<li>
								<Link activeClassName="is-active" className="c-lists__item" to="/links/public">
									<img src="/images/public.svg"/>Public<span className="c-lists__count">{counts.public}</span>
								</Link>
							</li>
							<li>
								<Link activeClassName="is-active" className="c-lists__item" to="/links/unread">
									<img src="/images/unread.svg"/>Unread<span className="c-lists__count">{counts.unread}</span>
								</Link>
							</li>
							<li>
								<Link activeClassName="is-active" className="c-lists__item" to="/links/untagged">
									<img src="/images/tag.svg"/>Untagged<span className="c-lists__count">{counts.untagged}</span>
								</Link>
							</li>
						</ul>

						<hr className="c-lists__separator"/>

						<ul className="c-lists">
							<li>
								<Link activeClassName="is-active" className="c-lists__item" to="/settings">
									<img src="/images/settings.svg"/>Settings
								</Link>
							</li>
							<li>
								<Link activeClassName="is-active" className="c-lists__item" to="/logout">
									<img src="/images/logout.svg"/>Log out
								</Link>
							</li>
						</ul>
					</div>

					{this.props.children}
				</div>
		)
	}
});
