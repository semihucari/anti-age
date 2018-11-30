import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import {fade} from '@material-ui/core/styles/colorManipulator';
import {withStyles} from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import {
    Button,
    Menu,
    MenuItem,
    Collapse,
    Drawer,
    Typography
} from '@material-ui/core';
import ButtonMenu from '../components/ButtonMenu';
import {HashRouter as Router, Route, Link} from "react-router-dom";
import i18n from "i18next";
import {withI18n, reactI18nextModule} from "react-i18next";
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
        fontWeight: 100
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
        height: '72%'
    },
    buttonSmall: {
        height: '20%'
    },
    labelLight: {
        fontFamily: '"Anton", sans-serif',
        fontSize: '1.8em'
    },
    labelFit: {
        fontFamily: '"Anton", sans-serif',
        fontSize: '1.8em',
        marginTop: '-30%'
    },
    langLabel: {
        fontFamily: '"Anton", sans-serif',
        fontSize: '0.8em'
    },
    navigationContainer: {
        display: 'inline-flex',
        width: '100%',
        paddingRight: '2vw',
        maxHeight: '9em'
    },
    personalContainer: {
        display: 'flex',
        marginRight: '2vw'
    },
    buttonContainer: {
        cursor: 'pointer',
        display: 'inline-flex',
        width: '5em'
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
                                    Kurslar
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
                                    Üyelİkler
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
                                    Salonumuz
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
                                    İletİŞİm
                                </Button>
                            </Link>
                        </div>
                        <div style={{textAlign: 'right'}}>
                            <div>
                                <Button
                                    className={classes.buttonSmall}
                                    classes={{
                                    label: classes.langLabel
                                }}
                                    color='primary'
                                    disableRipple
                                    onClick={() => changeLang()}>
                                    <img src={require('../images/english.png')}/>
                                </Button>
                            </div>
                            <Link to='/about' className={classes.link}>
                                <Button
                                    className={classes.buttonFit}
                                    classes={{
                                    label: classes.labelFit
                                }}
                                    color='primary'
                                    disableRipple>
                                    Hakkımızda
                                </Button>
                            </Link>
                        </div>
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
