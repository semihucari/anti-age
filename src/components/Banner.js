import React, {Component} from 'react'
import {withStyles} from '@material-ui/core/styles';
import {Typography, Button} from '@material-ui/core';
import {Link} from "react-router-dom";

const styles = theme => ({
    banner: {
        width: '100vw',
        height: '100vh',
        background: 'black',
        textAlign: 'center',
        paddingTop: '25vh'
    },
    buttonRoot: {
        width: '14em',
        height: '8em',
        background: 'rgb(254, 184, 28)',
        display: 'block',
        marginTop: '7vh',
        margin: 'auto',
        borderRadius: '0px',
        '&:hover': {
            background: 'rgb(254, 242, 28)'
        }
    },
    buttonLabel: {
        fontSize: '1.8em',
        fontFamily: '"Anton", sans-serif',
        color: 'black'
    },
    link: {
        textDecoration: 'none'
    }
});

const MyTypography = withStyles({
    h4: {
        fontSize: '3em',
        fontFamily: '"Anton", sans-serif',
        color: 'rgb(254, 184, 28)'
    },
    h5: {
        fontSize: '1.9em',
        fontFamily: '"Anton", sans-serif',
        color: 'rgb(254, 184, 28)'
    }
})(Typography)

class Banner extends Component {
    componentDidMount = () => {
        addEventHandlers();

        function addEventHandlers() {
            window.addEventListener('scroll', checkPosition);
            window.addEventListener('resize', checkPosition);
        }

        function checkPosition() {
            if (document.getElementById('power').getBoundingClientRect().top < window.innerHeight + window.scrollY) {
                document
                    .getElementById('bannerContainer')
                    .className = 'fade-in';
            }
        }

    }

    render() {

        const {classes} = this.props;

        return (
            <div className={classes.banner}>
                <div className='hidden' id='bannerContainer'>
                    <MyTypography variant='h4'>
                        ÖMER BALABAN FIGHT ACADEMY
                    </MyTypography>
                    <div
                        style={{
                        display: 'inline-block',
                        marginRight: '4em'
                    }}
                        id='power'>
                        <img
                            src={require('../images/body-building.png')}
                            style={{
                            padding: '2em',
                            height: '12em',
                            width: '12em'
                        }}/>
                        <MyTypography variant='h5'>
                            GÜÇ
                        </MyTypography>
                    </div>
                    <div
                        style={{
                        display: 'inline-block',
                        marginRight: '4em'
                    }}>
                        <img
                            src={require('../images/warming.png')}
                            style={{
                            padding: '2em',
                            height: '12em',
                            width: '12em'
                        }}/>
                        <MyTypography variant='h5'>
                            ESNEKLİK
                        </MyTypography>
                    </div>
                    <div
                        style={{
                        display: 'inline-block',
                        marginRight: '4em'
                    }}>
                        <img
                            src={require('../images/cardio.png')}
                            style={{
                            padding: '2em',
                            height: '12em',
                            width: '12em'
                        }}/>
                        <MyTypography variant='h5'>
                            KARDİYO
                        </MyTypography>
                    </div>
                    <div
                        style={{
                        display: 'inline-block'
                    }}>
                        <img
                            src={require('../images/speed.png')}
                            style={{
                            padding: '2em',
                            height: '12em',
                            width: '12em'
                        }}/>
                        <MyTypography variant='h5'>
                            HIZ
                        </MyTypography>
                    </div>
                    <Link to='/courses' className={classes.link}>
                        <Button
                            id='discover-button'
                            classes={{
                            label: classes.buttonLabel,
                            root: classes.buttonRoot
                        }}>Hemen Keşfet</Button>
                    </Link>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(Banner);