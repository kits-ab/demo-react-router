module.exports = {

	login(user, password, callback) {
		if (localStorage.token) {
			if (callback) {
				callback(true);
			}
			this.onChange(true);
			return;
		}

		pretendRequest(user, password, (result) => {
			if (result.authenticated) {
				localStorage.token = result.token;
				if (callback) {
					callback(true);
				}
				this.onChange(true);
			} else {
				if (callback) {
					callback(false);
				}
				this.onChange(false);
			}
		});
	},

	getToken() {
		return localStorage.token;
	},

	logout(callback) {
		delete localStorage.token;
		if (callback) {
			callback();
		}
		this.onChange(false);
	},

	loggedIn() {
		return !!localStorage.token;
	},

	onChange() {}
};

function pretendRequest(user, password, callback) {
	setTimeout(() => {
		if (user === 'user' && password === 'password') {
			callback({
				authenticated: true,
				token: Math.random().toString(36).substring(7)
			});
		} else {
			callback({authenticated: false});
		}
	}, 0);
}
