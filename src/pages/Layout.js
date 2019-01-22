import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import {Button, Typography} from '@material-ui/core';
import {Link} from "react-router-dom";
import {LocEn, LocTr} from '../localization/translation';

const translate = (key) => {
    const lang = localStorage.getItem('lang');
    return lang === 'tr'
        ? LocTr(key)
        : LocEn(key);
}

const styles = theme => ({
    root: {
        opacity: '1',
        fontWeight: 100,
        overflowY: 'auto'
    },
    toolbar: {
        margin: 'auto',
        width: '96%'
    },
    grow: {
        flexGrow: 1
    },
    buttonLarge: {
        height: '100%'
    },
    buttonFit: {
        height: '100%'
    },
    buttonSmall: {
        minHeight: '0px',
        height: '2em',
        width: '1em',
        minWidth: '1em'
    },
    labelLight: {
        fontFamily: '"Anton", sans-serif',
        fontSize: '1.8em'
    },
    labelFit: {
        fontFamily: '"Anton", sans-serif',
        fontSize: '1.8em'
    },
    langLabel: {
        fontFamily: '"Anton", sans-serif',
        fontSize: '0.4em'
    },
    navigationContainer: {
        display: 'inline-flex',
        width: '100%',
        maxHeight: '9em'
    },
    personalContainer: {
        display: 'flex',
        marginRight: '2vw'
    },
    buttonContainer: {
        cursor: 'pointer',
        display: 'block',
        width: '6em',
        height: '100%'
    },
    imgResize: {
        width: '3em',
        height: '3em'
    },
    drawer: {
        position: 'fixed',
        zIndex: 1
    },
    drawerPaper: {
        width: '100vw',
        opacity: '0.7',
        marginTop: '7em',
        height: '5em',
        backgroundColor: 'black'
    },
    link: {
        textDecoration: 'none',
        color: 'white'
    },
    logoResize: {
        height: '5em'
    }
});

const MyTypography = withStyles({
    subtitle1: {
        fontSize: '1em',
        fontFamily: '"Anton", sans-serif'
    }
})(Typography)

class PrimarySearchAppBar extends React.Component {

    render() {
        const {classes, changeLang} = this.props;

        return (
            <div className={classes.root}>
                <div id='app-bar' className='app-bar'>
                    <div className={classes.buttonContainer}>
                        <Link to='/' className={classes.link}>
                            <img src={require('../images/balaban-tra.png')} className={classes.logoResize}/>
                            <MyTypography
                                variant='subtitle1'
                                style={{
                                marginLeft: '0.5em'
                            }}>
                                {translate('homePage')}
                            </MyTypography>
                        </Link>
                    </div>
                    <div className={classes.navigationContainer}>
                        <div className={classes.grow}/>
                        <div>
                            <Link to='/courses' className={classes.link}>
                                <Button
                                    className={classes.buttonLarge}
                                    classes={{
                                    label: classes.labelLight
                                }}
                                    color='primary'
                                    disableRipple>
                                    {translate('courses')}
                                </Button>
                            </Link>
                        </div>
                        <div>
                            <Link to='/products' className={classes.link}>
                                <Button
                                    className={classes.buttonLarge}
                                    classes={{
                                    label: classes.labelLight
                                }}
                                    color='primary'
                                    disableRipple>
                                    {translate('subscriptions')}
                                </Button>
                            </Link>
                        </div>
                        <div>
                            <Link to='/gym' className={classes.link}>
                                <Button
                                    className={classes.buttonLarge}
                                    classes={{
                                    label: classes.labelLight
                                }}
                                    color='primary'
                                    disableRipple>
                                    {translate('facility')}
                                </Button>
                            </Link>
                        </div>
                        <div>
                            <Link to='/contact' className={classes.link}>
                                <Button
                                    className={classes.buttonLarge}
                                    classes={{
                                    label: classes.labelLight
                                }}
                                    color='primary'
                                    disableRipple>
                                    {translate('contact')}
                                </Button>
                            </Link>
                        </div>
                        <div
                            style={{
                            textAlign: 'right'
                        }}>
                            <Link to='/about' className={classes.link}>
                                <Button
                                    className={classes.buttonFit}
                                    classes={{
                                    label: classes.labelFit
                                }}
                                    color='primary'
                                    disableRipple>
                                    {translate('about')}
                                </Button>
                            </Link>
                        </div>
                    </div>
                    <div style={{width: '2.5em'}}>
                        <Button
                            className={classes.buttonSmall}
                            classes={{
                            label: classes.langLabel
                        }}
                            color='primary'
                            disableRipple
                            onClick={() => changeLang('tr')}>
                            <img
                                src={require('../images/tr-flag.png')}
                                style={{
                                width: '4em',
                                height: '3em',
                                marginTop: '-0.5em'
                            }}/>
                        </Button>
                        <Button
                            className={classes.buttonSmall}
                            classes={{
                            label: classes.langLabel
                        }}
                            color='primary'
                            disableRipple
                            onClick={() => changeLang('en')}>
                            <img
                                src={require('../images/eng-flag.png')}
                                style={{
                                width: '4em',
                                height: '3em',
                                marginTop: '-0.5em'
                            }}/>
                        </Button>
                    </div>
                </div>
                <main className='main'>
                    {this.props.children}
                </main>
            </div>
        );
    }
}

PrimarySearchAppBar.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PrimarySearchAppBar);
