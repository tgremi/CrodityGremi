import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';
import Drawer from 'material-ui/Drawer';
import FontIcon from 'material-ui/FontIcon';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import {yellow500} from 'material-ui/styles/colors';


function handleTouchTap() {
  alert('onTouchTap triggered on the title component');
}

const styles = {
  title: {
    cursor: 'pointer',
    color: '#000'
  },

  AppBar: {
    background: '#FFEB3B',
    textAlign: 'center'
  },

  FlatButton: {
    margin: 12,
  },

  iconStyles: {
    marginRight: 24,
    color: '#000'
  }

};

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  handleToggle() {
    this.setState({ open: !this.state.open });
  }

  handleClose() {
    this.setState({ open: false });
  }


  render() {

    return (

      <MuiThemeProvider>
        <div>
          <AppBar
            style={styles.AppBar}
            title={<span style={styles.title}> Crodity </span>}
            onTitleTouchTap={handleTouchTap}
            iconElementLeft={
              <IconButton onClick={this.handleToggle.bind(this)}>
                <FontIcon
                  className='fa fa-bars fa-2x'                 
                  />
                  </IconButton>
                }
            />

          <div>
            <Drawer
              docked={false}
              width={200}
              open={this.state.open}
              onRequestChange={(open) => this.setState({ open })}
              >
              <MenuItem onClick={this.handleClose.bind(this)}>Menu Item</MenuItem>
              <MenuItem onClick={this.handleClose.bind(this)}>Menu Item 2</MenuItem>
            </Drawer>
          </div>

        </div>
      </MuiThemeProvider>



    );
  }
}

export default Home;