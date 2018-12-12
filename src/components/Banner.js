import React, {Component} from 'react'
import {withStyles} from '@material-ui/core/styles';
import {Typography, Button} from '@material-ui/core';
import {Link} from "react-router-dom";
import {LocEn, LocTr} from '../localization/translation';

const translate = (key) => {
    const lang = localStorage.getItem('lang');
    return lang === 'tr'
        ? LocTr(key)
        : LocEn(key);
}

const styles = theme => ({
    banner: {
        width: '100vw',
        height: '100vh',
        textAlign: 'center',
        paddingTop: '13vh'
    },
    buttonRoot: {
        width: '12vw',
        height: '10vw',
        background: 'rgb(254, 184, 28)',
        display: 'block',
        marginTop: '9vw',
        margin: 'auto',
        borderRadius: '0px',
        '&:hover': {
            background: 'rgb(254, 242, 28)'
        }
    },
    buttonLabel: {
        fontSize: '2vw',
        fontFamily: '"Anton", sans-serif',
        color: 'black'
    },
    link: {
        textDecoration: 'none'
    },
    img: {
        margin: '4vw 0 3vw 0',
        height: '8vw',
        width: '8vw',
    }
});

const MyTypography = withStyles({
    h1: {
        fontSize: '3vw',
        fontFamily: '"Anton", sans-serif',
        color: 'rgb(254, 184, 28)',
        marginBottom: '1vw'
    },
    h2: {
        fontSize: '2vw',
        fontFamily: '"Anton", sans-serif',
        color: 'rgb(254, 184, 28)'
    }
})(Typography)

class Banner extends Component {

    render() {

        const {classes} = this.props;

        return (
            <div className={classes.banner}>
                <div className='fade-in' id='bannerContainer'>
                    <MyTypography variant='h1'>
                        ÖMER BALABAN FIGHT ACADEMY
                    </MyTypography>
                    <div
                        style={{
                        display: 'inline-block',
                        marginRight: '6em'
                    }}
                        id='power'>
                        <img
                            src={require('../images/body-building.png')}
                            className={classes.img}/>
                        <MyTypography variant='h2'>
                            {translate('power')}
                        </MyTypography>
                    </div>
                    <div
                        style={{
                        display: 'inline-block',
                        marginRight: '6em'
                    }}>
                        <img
                            src={require('../images/warming.png')}
                            className={classes.img}/>
                        <MyTypography variant='h2'>
                            {translate('flexibility')}
                        </MyTypography>
                    </div>
                    <div
                        style={{
                        display: 'inline-block',
                        marginRight: '6em'
                    }}>
                        <img
                            src={require('../images/cardio.png')}
                            className={classes.img}/>
                        <MyTypography variant='h2'>
                            {translate('cardio')}
                        </MyTypography>
                    </div>
                    <div
                        style={{
                        display: 'inline-block'
                    }}>
                        <img
                            src={require('../images/speed.png')}
                            className={classes.img}/>
                        <MyTypography variant='h2'>
                            {translate('speed')}
                        </MyTypography>
                    </div>
                    <Link to='/courses' className={classes.link}>
                        <Button
                            id='discover-button'
                            classes={{
                            label: classes.buttonLabel,
                            root: classes.buttonRoot
                        }}>
                            {translate('discoverNow')}
                        </Button>
                    </Link>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(Banner);