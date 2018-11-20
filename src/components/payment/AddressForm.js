import React, {Component} from 'react'
import {withStyles} from '@material-ui/core/styles';
import {InputBase, Typography} from '@material-ui/core';

const styles = theme => ({
    formContainer: {
        height: '75vh',
        paddingTop: '5vh',
        // backgroundImage: `url(${require('../../images/img4.png')})`,
        // backgroundSize: 'cover',
        // backgroundRepeat: 'no-repeat',
    },
    fieldContainer: {
        paddingLeft: '3vw',
        marginBottom: '2vh'
    },
    smallFieldContainer: {
        paddingLeft: '3vw',
        marginBottom: '2vh',
        display: 'flex',
    },
    phoneField: {
        width: '20vw',
        padding: '1.5vw',
        background: 'lavenderblush',
        borderRadius: '3px'
    },
    addressField: {
        width: '50vw',
        padding: '1.5vw',
        background: 'lavenderblush',
        borderRadius: '3px'
    },
    input: {
        borderBottom: '0px'
    },
    h6: {
        fontWeight: 100
    },
    sideRight: {
        marginLeft: '2em'
    }
});

class AdressForm extends Component {
    render() {

        const {classes} = this.props;

        return (
            <div className={classes.formContainer}>
                <div className={classes.fieldContainer}>
                    <Typography
                        variant='h6'
                        classes={{
                        h6: classes.h6
                    }}>İsim Soyisim</Typography>
                    <InputBase
                        className={classes.addressField}
                        classes={{
                        underline: classes.input
                    }}/>
                </div>
                <div className={classes.fieldContainer}>
                    <Typography
                        variant='h6'
                        classes={{
                        h6: classes.h6
                    }}>Teslimat Adresi</Typography>
                    <InputBase
                        className={classes.addressField}
                        classes={{
                        underline: classes.input
                    }}/>
                </div>
                <div className={classes.smallFieldContainer}>
                    <div className={classes.sideLeft}>
                        <Typography
                            variant='h6'
                            classes={{
                            h6: classes.h6
                        }}>Telefon Numarası</Typography>
                        <InputBase
                            className={classes.phoneField}
                            classes={{
                            underline: classes.input
                        }}/>
                    </div>
                    <div className={classes.sideRight}>
                        <Typography
                            variant='h6'
                            classes={{
                            h6: classes.h6
                        }}>Eposta Adresi</Typography>
                        <InputBase
                            className={classes.phoneField}
                            classes={{
                            underline: classes.input
                        }}/>
                    </div>
                </div>
                <div className={classes.fieldContainer}>
                    <Typography
                        variant='h6'
                        classes={{
                        h6: classes.h6
                    }}>Posta Kodu</Typography>
                    <InputBase
                        className={classes.phoneField}
                        classes={{
                        underline: classes.input
                    }}/>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(AdressForm);