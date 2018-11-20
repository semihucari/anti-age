import {CardNumberElement, CardCVCElement, CardExpiryElement, injectStripe, CardElement} from 'react-stripe-elements';
import React, {Component} from 'react'
import {Button, withStyles, Typography, Fade} from '@material-ui/core';

const handleBlur = () => {
    console.log('[blur]');
};
const handleClick = () => {
    console.log('[click]');
};
const handleFocus = () => {
    console.log('[focus]');
};
const handleReady = () => {
    console.log('[ready]');
};

const createOptions = (fontSize) => {
    return {
        style: {
            base: {
                fontSize,
                color: '#424770',
                borderStyle: 'solid',
                letterSpacing: '0.025em',
                fontFamily: 'typeface-roboto',
                '::placeholder': {
                    color: '#aab7c4'
                }
            },
            invalid: {
                fontSize,
                color: '#9e2146',
                borderStyle: 'solid',
                letterSpacing: '0.025em',
                fontFamily: 'typeface-roboto'
            }
        }
    };
};

const styles = theme => ({
    paymentContainer: {
        paddingTop: '1vh',
        backgroundImage: `url(${require('../../images/img3.jpg')})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '80vh'
    },
    cardFormContainer: {
        maxWidth: '25em',
        textAlign: 'right',
        marginLeft: '10vw'
    },
    paymentLabel: {
        marginTop: '2vh'
    },
    cardNumber: {
        background: 'lavenderblush',
        borderRadius: '3px',
        padding: '1em'
    },
    h6: {
        fontWeight: 100
    },
    subtitle2: {
        fontWeight: 200,
        color: 'white'
    },
    payButton: {
        marginTop: '2em'
    },
    payButtonRoot: {
        background: 'lavenderblush',
        textTransform: 'none'
    },
    errorField: {
        background: 'lightcoral',
        borderRadius: '3px',
        marginTop: '1vh',
        textAlign: 'center',
        height: '2em',
        paddingTop: '0.6em'
    },
    successField: {
        background: 'forestgreen',
        borderRadius: '3px',
        marginTop: '1vh',
        textAlign: 'center',
        height: '2em',
        paddingTop: '0.6em'
    },
    hide: {
        opacity: '0'
    }
});

class _CardForm extends React.Component {
    state = {
        number: '',
        name: '',
        expiry: '',
        cardCvc: ''
    };

    handleChange = (change) => {
        console.log('[change]', change);
    };

    handleSubmit = async(ev) => {
        ev.preventDefault();
        this.setState({loading: true, error: undefined, token: undefined});
        let response = await this
            .props
            .stripe
            .createToken();
        console.log(response);
        response.error
            ? this.setState({error: response.error.code, token: response.token, loading: false})
            : this.setState({error: undefined, token: response.token, loading: false});

        // let response = await fetch("/charge", {     method: "POST",     headers: {
        // "Content-Type": "text/plain"     },     body: token.id }); if (response.ok)
        // console.log("Purchase Complete!")
    };

    render() {
        const {classes} = this.props;
        const {error, loading, token} = this.state;

        return (
            <div className={classes.paymentContainer}>
                <form onSubmit={this.handleSubmit} className={classes.cardFormContainer}>
                    <Typography variant='h5' className={classes.paymentTitle}>Kredi Kartı Bilgileri</Typography>
                    <div>
                        <Typography
                            variant='h6'
                            className={classes.paymentLabel}
                            classes={{
                            h6: classes.h6
                        }}>Kredi kartı numarası</Typography>
                        <CardNumberElement
                            id='card-number'
                            onBlur={handleBlur}
                            onChange={this.handleChange}
                            onFocus={handleFocus}
                            onReady={handleReady}
                            className={classes.cardNumber}
                            placeholder="____  ____  ____  ____"
                            {...createOptions('1.6em')}/>
                    </div>
                    <Typography
                        variant='h6'
                        className={classes.paymentLabel}
                        classes={{
                        h6: classes.h6
                    }}>Son Kullanma Tarihi</Typography>
                    <CardExpiryElement
                        onBlur={handleBlur}
                        onChange={this.handleChange}
                        onFocus={handleFocus}
                        onReady={handleReady}
                        className={classes.cardNumber}
                        placeholder="AA/YY"
                        {...createOptions('1.6em')}/>
                    <Typography
                        variant='h6'
                        className={classes.paymentLabel}
                        classes={{
                        h6: classes.h6
                    }}>CVC</Typography>
                    <CardCVCElement
                        onBlur={handleBlur}
                        onChange={this.handleChange}
                        onFocus={handleFocus}
                        onReady={handleReady}
                        className={classes.cardNumber}
                        placeholder=""
                        {...createOptions('1.6em')}/>
                    <Button
                        type='submit'
                        fullWidth
                        variant='flat'
                        className={classes.payButton}
                        disabled={loading}
                        classes={{
                        root: classes.payButtonRoot
                    }}>{loading
                            ? 'İşlem Devam Ediyor...'
                            : 'Onayla'}</Button>
                    <Fade in={error || token} timeout={500}>
                        <div
                            className={error
                            ? classes.errorField
                            : token
                                ? classes.successField
                                : classes.hide}>
                            {error && <Typography
                                variant='subtitle2'
                                classes={{
                                subtitle2: classes.subtitle2
                            }}>{error === 'incomplete_number'
                                    ? 'Eksik kredi kartı numarası!'
                                    : error === 'incomplete_expiry'
                                        ? 'Eksik son kullanma tarihi'
                                        : error === 'incomplete_cvc'
                                            ? 'Eksik CVC'
                                            : error}</Typography>}
                            {token && <Typography
                                variant='subtitle2'
                                classes={{
                                subtitle2: classes.subtitle2
                            }}>İşlem Başarılı!</Typography>}
                        </div>
                    </Fade>
                </form>
            </div>
        );
    }
}
export default withStyles(styles)(injectStripe(_CardForm));