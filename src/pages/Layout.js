import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import {fade} from '@material-ui/core/styles/colorManipulator';
import {withStyles} from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import {Button, Menu, MenuItem, Collapse, Drawer} from '@material-ui/core';
import Fade from '@material-ui/core/Fade';
import ButtonMenu from '../components/ButtonMenu';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

const styles = theme => ({
    root: {
        width: '100%',
        opacity: '1',
        fontWeight: 100
    },
    appBar: {
        height: '15vh',
        boxShadow: 'none'
    },
    toolbar: {
        margin: 'auto',
        width: '96%'
    },
    grow: {
        flexGrow: 1
    },
    menuButton: {
        marginLeft: 0,
        marginRight: -20,
        float: 'right'
    },
    chartButton: {
        marginLeft: 0,
        float: 'right',
        cursor: 'pointer'
    },
    buttonLarge: {
        height: '-webkit-fill-available'
    },
    title: {
        display: 'none',
        [
            theme
                .breakpoints
                .up('sm')
        ]: {
            display: 'block'
        }
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25)
        },
        marginRight: theme.spacing.unit * 2,
        marginLeft: 0,
        width: '100%',
        [
            theme
                .breakpoints
                .up('sm')
        ]: {
            marginLeft: theme.spacing.unit * 3,
            width: 'auto'
        }
    },
    searchIcon: {
        width: theme.spacing.unit * 9,
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    inputRoot: {
        color: 'inherit',
        width: '100%',
        height: '15vh'
    },
    inputInput: {
        paddingTop: theme.spacing.unit,
        paddingRight: theme.spacing.unit,
        paddingBottom: theme.spacing.unit,
        paddingLeft: theme.spacing.unit * 10,
        transition: theme
            .transitions
            .create('width'),
        width: '100%',
        [
            theme
                .breakpoints
                .up('md')
        ]: {
            width: 200
        }
    },
    labelLight: {
        fontWeight: 100
    },
    navigationContainer: {
        display: 'contents'
    },
    personalContainer: {
        display: 'flex',
        marginRight: '2vw'
    },
    hiddenContainer: {
        display: 'none'
    },
    buttonContainer: {
        margin: '2vw',
        cursor: 'pointer'
    },
    imgResize: {
        width: '48px',
        height: '48px'
    },
    drawer: {
        position: 'fixed',
        zIndex: 1
    },
    drawerPaper: {
        width: '100vw',
        opacity: '0.7',
        marginTop: '15vh',
        height: '11vh',
        backgroundColor: 'black'
    },
    link: {
        textDecoration: 'none',
        color: 'white'
    },
    logoResize: {
        height: '15vh'
    }
});

class PrimarySearchAppBar extends React.Component {
    state = {
        anchorEl: null,
        mobileMoreAnchorEl: null,
        menuOpen: false,
        buttonMenuOpen: false,
        menuFor: ''
    };

    handleProfileMenuOpen = event => {
        this.setState({anchorEl: event.currentTarget});
    };

    handleMenuClose = () => {
        this.setState({anchorEl: null});
        this.handleMobileMenuClose();
    };

    handleMobileMenuOpen = event => {
        this.setState({mobileMoreAnchorEl: event.currentTarget});
    };

    handleMobileMenuClose = () => {
        this.setState({mobileMoreAnchorEl: null});
    };

    handleMenu = () => {
        this.setState({
            menuOpen: !this.state.menuOpen
        });
    }

    handleClick = (name) => event => {
        this.setState({
            buttonMenuOpen: !this.state.buttonMenuOpen
        })
    }

    render() {
        const {classes} = this.props;
        const {menuOpen, menuFor, buttonMenuOpen} = this.state;

        return (
            <div className={classes.root}>
                <AppBar
                    id='app-bar'
                    position="sticky"
                    classes={{
                    positionSticky: classes.appBar
                }}>
                    <Toolbar className={classes.toolbar}>
                        <div className={classes.buttonContainer}>
                            <Link to='/' className={classes.link}>
                                <img src={require('../images/balaban.jpg')} className={classes.logoResize}/>
                            </Link>
                        </div>
                        <div className={classes.grow}/>
                        <div
                            className={menuOpen
                            ? classes.hiddenContainer
                            : classes.navigationContainer}>
                            <div>
                                <Link to='/products' className={classes.link}>
                                    <Button
                                        onMouseOver={() => {
                                        this.setState({buttonMenuOpen: true, menuFor: 'products'})
                                    }}
                                        className={classes.buttonLarge}
                                        classes={{
                                        label: classes.labelLight
                                    }}
                                        color='secondary'
                                        disableRipple>
                                        Dersler
                                    </Button>
                                </Link>
                            </div>
                            <div>
                                <Link to='/about' className={classes.link}>
                                    <Button
                                        onMouseOver={() => {
                                        this.setState({buttonMenuOpen: true, menuFor: 'about'})
                                    }}
                                        className={classes.buttonLarge}
                                        classes={{
                                        label: classes.labelLight
                                    }}
                                        color='secondary'
                                        disableRipple>
                                        Semix Hakkında
                                    </Button>
                                </Link>
                            </div>
                            <div>
                                <Link to='/contact' className={classes.link}>
                                    <Button
                                        onMouseOver={() => {
                                        this.setState({buttonMenuOpen: true, menuFor: 'contact'})
                                    }}
                                        className={classes.buttonLarge}
                                        classes={{
                                        label: classes.labelLight
                                    }}
                                        color='secondary'
                                        disableRipple>
                                        İletİŞİm
                                    </Button>
                                </Link>
                            </div>
                            <div className={classes.search}>
                                <div className={classes.searchIcon}>
                                    <SearchIcon/>
                                </div>
                                <InputBase
                                    placeholder="Ara…"
                                    classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput
                                }}/>
                            </div>
                        </div>
                        <Fade in={menuOpen} timeout={500}>
                            <div
                                className={!menuOpen
                                ? classes.hiddenContainer
                                : classes.personalContainer}>
                                <div className={classes.buttonContainer}>
                                    <img src={require('../images/envelope.png')} className={classes.imgResize}/>
                                </div>
                                <div className={classes.buttonContainer}>
                                    <img src={require('../images/ring.png')} className={classes.imgResize}/>
                                </div>
                                <div className={classes.buttonContainer}>
                                    <img src={require('../images/settings.png')} className={classes.imgResize}/>
                                </div>
                                <div className={classes.buttonContainer}>
                                    <img src={require('../images/profile.png')} className={classes.imgResize}/>
                                </div>
                            </div>
                        </Fade>
                        <div>
                            <div>
                                <IconButton
                                    className={classes.menuButton}
                                    color="inherit"
                                    aria-label="Open drawer">
                                    <MenuIcon fontSize="large" onClick={this.handleMenu}/>
                                </IconButton>
                            </div>
                            <Link to='/cart' className={classes.link}>
                                <div className={classes.chartButton}>
                                    <img src={require('../images/shopping-cart.png')}/>
                                </div>
                            </Link>
                        </div>
                    </Toolbar>
                </AppBar>
                <Drawer
                    className={classes.drawer}
                    variant="persistent"
                    anchor="top"
                    open={buttonMenuOpen}
                    classes={{
                    paper: classes.drawerPaper
                }}>
                    <div
                        onMouseLeave={() => {
                        this.setState({buttonMenuOpen: false})
                    }}><ButtonMenu menuFor={menuFor}/></div>
                </Drawer>
                <main>
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
