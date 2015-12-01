import React from 'react'
import { Link } from 'react-router'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import data from '../data'

function extractDomain(url) {
	if (!url) {
		return null;
	}

	var domain;
	if (url.indexOf('://') > -1) {
		domain = url.split('/')[2];
	} else {
		domain = url.split('/')[0];
	}

	return domain.split(':')[0];
}

export const List = React.createClass({
	render() {
		const {listId} = this.props.params;

		return (
				<div className="c-app__content c-content">
					<div className="c-content__navigation c-column">
						<div className="c-column__header">
							<h2>Links</h2>
						</div>
						<div className="c-column__content no-padding">
							{data.getLinksForList(listId).map((link, index) => (
									<Link activeClassName="is-active" className="c-link"
											to={`/links/${listId}/${link.id}`}>
										<h4>{extractDomain(link.href)}</h4>
										<h3>{link.description}</h3>
										<p>{link.extended}</p>
										<p>
											{link.tags.split(' ').map((tag, index) => (
													<span className="c-tag">{tag}</span>
											))}
										</p>
									</Link>
							))}
						</div>
					</div>

					{this.props.children}
				</div>
		)
	}
});

export const Show = React.createClass({
	render() {
		const {listId, linkId} = this.props.params;
		const link = data.getLinkById(linkId);

		return (
				<div className="c-content__content c-column">
					<div className="c-column__header c-navbar">
						<h2 className="c-navbar__header">{link.description}</h2>
						<ul className="c-navbar__menu">
							<li>
								<Link activeClassName="is-active" className="c-navbar__menu-item"
										to={`/links/${listId}/${linkId}/info`}>
									<img alt="Info" src="/images/info.svg"/>
								</Link>
							</li>
						</ul>

					</div>
					<iframe className="c-column__content no-padding"
							sandbox="allow-same-origin allow-scripts" src={link.href}></iframe>

					<ReactCSSTransitionGroup transitionName="fade"
							transitionEnterTimeout={200} transitionLeaveTimeout={200}>
						{this.props.children}
					</ReactCSSTransitionGroup>

				</div>
		)
	}
});

export const Info = React.createClass({
	render() {
		const {listId, linkId} = this.props.params;
		const link = data.getLinkById(linkId);

		return (
				<div className="c-popup">
					<h4>{extractDomain(link.href)}</h4>
					<h3>{link.description}</h3>
					<p>{link.extended}</p>
					<p>
						{link.tags.split(' ').map((tag, index) => (
								<span className="c-tag">{tag}</span>
						))}
					</p>
				</div>
		)
	}
});

export const Index = React.createClass({
	render() {
		return (
				<div className="c-app__content c-column">
					<div className="c-column__header"/>
					<div className="c-column__content">
						<p>No link selected.</p>
					</div>
				</div>
		)
	}
});
