import TextField from 'material-ui/TextField';
import React, { Component } from 'react';

export const yellowCrodity = '#ffca43';



class EmailFieldValidation extends Component {

    constructor(props) {
        super(props)
        this.state = { errorText: '', value: props.value }
    }


    validateEmail(value) {
        // regex from http://stackoverflow.com/questions/46155/validate-email-address-in-javascript
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(value);
    }


    onChange(event) {
        if (event.target.value.match(this.validateEmail(this.value))) {
            this.setState({ errorText: 'Invalid Adress' })
        }
        if (event.target.value.match === '') {
            this.setState({ errorText: 'Email is required' })
        } else {
            this.setState({ errorText: '' })
        }

    }

    render() {
        return (
            <TextField hintText="Email"
                floatingLabelText="Email"
                name="email"
                errorText={this.state.errorText}
                onChange={this.onChange.bind(this)}
                />

        )
    }
}

export { EmailFieldValidation };