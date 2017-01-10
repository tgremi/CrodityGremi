import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import AccountsLogin from '../mobile/AccountsLogin.jsx';

function handleTouchTap() {
    alert('onTouchTap triggered on the title component');
}

const styles = {
    img:{
        marginTop: 50, 
    }
}

class Register extends Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false,
        };

    }

    handleToggle() {
        this.setState({ open: !this.state.open });
    }

    handleClose() {
        this.setState({ open: false });
    }

    componentDidMount() {
        $(".button-collapse").sideNav();
    }


    render() {

        return (

            <div>
            <div style={styles.img} className="center-align">
                    <img className="responsive-img" src="/img/CrodityLogo.jpg" alt="Crodity Logo" />
                </div>

            <div className="container">
                <div className="row">
                    <form className="col s12">  
                        <div className="row">
                            <div className="input-field col s6">
                                <input id="first_name" type="text" className="validate" />
                                <label htmlFor="first_name">First Name</label>
                            </div>

                            <div className="input-field col s6">
                                <input id="last_name" type="text" className="validate" />
                                <label htmlFor="last_name">Last Name</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <input id="password" type="password" className="validate" />
                                <label htmlFor="password">Password</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <input id="email" type="email" className="validate" />
                                <label htmlFor="email" data-error="wrong" data-success="right">Email</label>
                            </div>
                        </div>
                    </form>

                   
                </div>

            </div>
        </div>

        );
    }
}

export default Register;