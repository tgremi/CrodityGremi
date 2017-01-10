// Main Imports
import React from 'react';
import { Accounts } from 'meteor/accounts-base';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
// import injectTapEventPlugin from 'react-tap-event-plugin';
import App from '../imports/ui/App.jsx';
import injectTapEventPlugin from 'react-tap-event-plugin';
// Frontend Libraries Imports
import '../imports/vendor/ss-gizmo/webfonts/ss-gizmo.js';
import '../imports/vendor/ss-gizmo/webfonts/ss-gizmo.css';

// Run basic configuration and rendering at client startup
Meteor.startup(() => {




	// Needed for onTouchTap
	// http://stackoverflow.com/a/34015469/988941
	// injectTapEventPlugin();

	// Locale configurations for the client (from the moment.js module)
	moment.locale('pt-br');

	// Rendering the App Component
	render(<App />, document.getElementById('app'));
	// render(<AppContainer><App /></AppContainer>, document.getElementById('app'));

	// if (module.hot) {
	// 	module.hot.accept('../imports/ui/App.jsx', () => {
	// 		const NextApp = require('../imports/ui/App.jsx').default;
	// 		render(
	// 			<AppContainer>
	// 				<NextApp />
	// 			</AppContainer>,
	// 			document.getElementById('app')
	// 		);
	// 	});
	// }

});
