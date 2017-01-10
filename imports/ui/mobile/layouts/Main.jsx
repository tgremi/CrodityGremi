import React from 'react';
import SidePanel from './SidePanel.jsx';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const Main = ({children}) => (

	<MuiThemeProvider>
		<div className="main">
			<home data-page="true">
				{children}
			</home>
		</div>
	</MuiThemeProvider>
);

export default Main;
