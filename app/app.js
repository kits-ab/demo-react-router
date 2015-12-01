import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute } from 'react-router'
import createBrowserHistory from 'history/lib/createBrowserHistory'
import auth from './auth'

import Welcome from './components/Welcome'
import Login from './components/Login'
import Logout from './components/Logout'
import App from './components/App'
import Index from './components/Index'
import * as Links  from "./components/Links";
import Settings from './components/Settings'

require('./sass/style.scss');

function requireAuth(nextState, replaceState) {
	if (!auth.loggedIn()) {
		replaceState({nextPathname: nextState.location.pathname}, '/login')
	}
}

render((
		<Router history={createBrowserHistory()}>
			<Route path="/" component={Welcome}>
				<Route path="login" component={Login}/>
				<Route path="logout" component={Logout}/>
			</Route>
			<Route path="links" component={App} onEnter={requireAuth}>
				<IndexRoute component={Index}/>
				<Route path=":listId" component={Links.List}>
					<IndexRoute component={Links.Index}/>
					<Route path=":linkId" component={Links.Show}>
						<Route path="info" component={Links.Info}/>
					</Route>
				</Route>
				<Route path="/settings" component={Settings}/>
			</Route>
		</Router>
), document.getElementById('app'));
