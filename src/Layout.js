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
import AccountIcon from '@material-ui/icons/AccountBoxSharp';
import SearchIcon from '@material-ui/icons/Search';
import {Button, Menu, MenuItem} from '@material-ui/core';

const styles = theme => ({
    root: {
        width: '100%',
        opacity: '1',
        fontWeight: 100
    },
    appBar: {
        height: '150px',
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
        height: '150px'
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
    }
});

class PrimarySearchAppBar extends React.Component {
    state = {
        anchorEl: null,
        mobileMoreAnchorEl: null,
        menuOpen: false
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

    render() {
        const {classes} = this.props;
        const {menuOpen} = this.state;

        return (
            <div className={classes.root}>
                <AppBar
                    id='app-bar'
                    position="sticky"
                    classes={{
                    positionSticky: classes.appBar
                }}>
                    <Toolbar className={classes.toolbar}>

                        <Typography className={classes.title} variant="h6" color="inherit" noWrap>
                            Lubex anti-age
                        </Typography>
                        <div className={classes.grow}/>
                        <div
                            className={menuOpen
                            ? classes.hiddenContainer
                            : classes.navigationContainer}>
                            <div>
                                <Button
                                    classes={{
                                    label: classes.labelLight
                                }}
                                    color='secondary'
                                    disableRipple>
                                    Ürünler
                                </Button>
                            </div>
                            <div>
                                <Button
                                    classes={{
                                    label: classes.labelLight
                                }}
                                    color='secondary'
                                    disableRipple>
                                    İletİŞİm
                                </Button>
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
                        <div
                            className={!menuOpen
                            ? classes.hiddenContainer
                            : classes.personalContainer}>
                            <div className={classes.buttonContainer}>
                                <img src={require('./images/envelope.png')}/>
                            </div>
                            <div className={classes.buttonContainer}>
                                <img src={require('./images/ring.png')}/>
                            </div>
                            <div className={classes.buttonContainer}>
                                <img src={require('./images/settings.png')}/>
                            </div>
                            <div className={classes.buttonContainer}>
                                <img src={require('./images/profile.png')}/>
                            </div>
                        </div>
                        <IconButton
                            className={classes.menuButton}
                            color="inherit"
                            aria-label="Open drawer">
                            <MenuIcon fontSize="large" onClick={this.handleMenu}/>
                        </IconButton>
                    </Toolbar>
                </AppBar>
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
