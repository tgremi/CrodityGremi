import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';


const styles = {
    btn: {
        backgroundColor: '#ffca43'
    }
}


class LoginCrodityAccount extends Component {

    render() {

        return (
            <div className="container">

                <form className="col s12">
                    <div className="row">
                      
                            <div className="input-field col s12 m6 offset-m3">
                                <input id="user" type="text" className="validate" />
                                <label htmlFor="user">User</label>
                            </div>
                        
                    </div>
                    <div className="row">
                            <div className="input-field col s12 m6 offset-m3">
                                <input id="passwordLogin" type="password" className="validate" />
                                <label htmlFor="password">Password</label>
                            </div>
                       
                    </div>
                    <button style={styles.btn} className="center-align btn waves-effect waver-light black-text"
                        type="submit" name="action"> Login
            <i className="black-text fa fa-sign-in left" aria-hidden="true"></i>

                    </button>

                </form>

            </div>
        );
    }
}

export default LoginCrodityAccount; 