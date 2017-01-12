import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import React, { Component } from 'react';
import { withRouter } from 'react-router';

import AccountsUIWrapper from './AccountsUIWrapper.jsx';
import AccountsLogin from './AccountsLogin.jsx';


const styles = {
	img: {
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'space-around',
		marginTop: 50,
	},
	button: {

	},
};


class App extends Component {

	componentDidMount() {
		let self = this;

		console.log(this.props);
		if (this.props.currentUser != null) {
			console.log('getUserRegisteredEmails');
			Meteor.call('getUserRegisteredEmails', function (error, result) {
				if (result.length == 0) {
					self.props.router.push('/email-form');
				}
			});
		}
	}

	render() {
		/* ********************* */
		/* Mobile Connected User */
		/* ********************* */
		if (this.props.currentUser != null) {
			return (
				<div className='mobile-app content'>
					{this.props.children}
				</div>
			);
		}

		/* ************ */
		/* Mobile Login */
		/* ************ */
		else {
			return (
				<div>
					<div className="row">
						<div className="col s12 m4 offset-m4">
							<div className="mobile-login" style={styles.img}>
								<img className="responsive-img" src="/img/CrodityLogo.jpg" alt="Crodity Logo" />
							</div>
						</div>
					</div>

					<div>
						<AccountsLogin text="connect" />
					</div>
				</div>
			);
		}

	}


}

export default withRouter(App);
