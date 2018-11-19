import React, {Component} from 'react'
import {withStyles} from '@material-ui/core/styles';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';


const styles = theme => ({});

class CreditCardForm extends Component {
    state = {
        number: '',
        name: '',
        expiry: '',
        cvc: '',
        issuer: '',
        focused: '',
        formData: null
    };

    render() {

        const { name, number, expiry, cvc, focused, issuer, formData } = this.state;

        return (
            <div>
                <Cards
                    number={number}
                    name={name}
                    expiry={expiry}
                    cvc={cvc}
                    focused={focused}
                    callback={this.handleCallback}/>
            </div>
        )
    }
}

export default withStyles(styles)(CreditCardForm);