import React, {Component} from 'react'
import {withStyles} from '@material-ui/core/styles';
import {Typography, IconButton} from '@material-ui/core';
import {LocEn, LocTr} from '../../localization/translation';

const translate = (key) => {
    const lang = localStorage.getItem('lang');
    return lang === 'tr'
        ? LocTr(key)
        : LocEn(key);
}

const styles = theme => ({
    root: {
        paddingTop: '9em',
        paddingLeft: '2em',
        background: `linear-gradient(
            rgba(187, 228, 1, 0.45), 
            rgba(0, 0, 0, 0.74)
          ), url(${require('../../images/taek-page.jpg')})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '100vh'
    },
    buttonContainer: {
        position: 'absolute',
        right: '1em',
        bottom: '1em'
    },
    buttonRoot: {
        border: 'solid 3px rgb(254, 184, 28)',
        '&:hover': {
            background: 'rgb(0, 0, 0)'
        }
    }
});

const MyTypography = withStyles({
    h5: {
        fontSize: '1.9em',
        fontFamily: '"Anton", sans-serif',
        color: 'rgb(254, 184, 28)'
    },
    subtitle1: {
        fontSize: '1em',
        fontFamily: '"Anton", sans-serif'
    }
})(Typography)

class Taek extends Component {
    render() {
        const {classes} = this.props;
        // this.props.history.goBack();
        return (
            <div className={classes.root}>
                <MyTypography variant='h5' color='secondary'>
                    {translate('taek')}
                </MyTypography>
                <MyTypography
                    variant='subtitle1'
                    color='secondary'
                    style={{
                    width: '50vw'
                }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec magna nunc.
                    Quisque ultrices vestibulum massa, non mattis risus varius vel. Phasellus vitae
                    erat tempus, mattis erat sit amet, vehicula enim. Curabitur et bibendum felis.
                    Duis non rhoncus velit. Fusce lobortis est at quam interdum, vitae posuere leo
                    faucibus. In sed sollicitudin diam. Donec bibendum sodales ex, quis facilisis
                    diam sollicitudin sit amet. Integer sagittis pretium dolor nec viverra.
                    Suspendisse pulvinar at metus in aliquet. Vestibulum ante ipsum primis in
                    faucibus orci luctus et ultrices posuere cubilia Curae; Phasellus mollis metus
                    nec odio lobortis luctus. Phasellus maximus nisl vel nisi lacinia, ut mollis
                    magna scelerisque. Nam accumsan diam sit amet orci rhoncus, et iaculis elit
                    hendrerit. Vestibulum scelerisque molestie nunc, id condimentum neque lobortis
                    non. Praesent at tempus massa, at pulvinar turpis. Nunc in fringilla libero, et
                    ornare dui. Maecenas ultrices blandit nisl. Nulla nulla risus, luctus id
                    vestibulum in, pretium vitae nulla. Aliquam auctor rutrum diam, sit amet
                    sagittis nunc lobortis nec. Integer sem elit, molestie ut egestas a, congue sed
                    nunc. Donec et quam turpis. Pellentesque nec semper turpis. Nullam faucibus orci
                    ut arcu faucibus, a gravida elit accumsan. Nam in augue sem. Integer at nunc id
                    lectus congue fermentum.
                </MyTypography>

                <div className={classes.buttonContainer}>
                    <IconButton
                        classes={{
                        root: classes.buttonRoot
                    }}
                        onClick={() => this.props.history.goBack()}>
                        <img src={require('../../images/back.png')}/>
                    </IconButton>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(Taek);