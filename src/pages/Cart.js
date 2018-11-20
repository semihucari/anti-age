import React, {Component} from 'react'
import {withStyles} from '@material-ui/core/styles';
import CreditCardForm from '../components/payment/CreditCardForm';
import {StripeProvider, Elements} from 'react-stripe-elements';
import AddressForm from '../components/payment/AddressForm';

const styles = theme => ({});

class Contact extends Component {
    render() {
        return (
            <div>
                <StripeProvider apiKey="pk_test_6pRNASCoBOKtIshFeQd4XMUh">
                    <Elements>
                        <CreditCardForm/>
                    </Elements>
                </StripeProvider>
                <AddressForm/>
            </div>
        )
    }
}

export default withStyles(styles)(Contact);