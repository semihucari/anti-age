import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import {fade} from '@material-ui/core/styles/colorManipulator';
import {withStyles} from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import {Button, Menu, MenuItem, Collapse, Drawer} from '@material-ui/core';
import ButtonMenu from '../components/ButtonMenu';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

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
    labelLight: {
        fontFamily: '"Anton", cursive',
        fontSize: '1.8em'
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
        width: '100%'
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

class PrimarySearchAppBar extends React.Component {
    state = {
        buttonMenuOpen: false,
        menuFor: ''
    };

    render() {
        const {classes} = this.props;
        const {menuFor, buttonMenuOpen} = this.state;

        return (
            <div className={classes.root}>
                <div id='app-bar' className='app-bar'>
                    <div className={classes.buttonContainer}>
                        <Link to='/' className={classes.link}>
                            <img
                                src={require('../images/sarı-balaban.jpg')}
                                className={classes.logoResize}/>
                        </Link>
                    </div>
                    <div className={classes.navigationContainer}>
                        <div className={classes.grow}></div>
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
                                    color='primary'
                                    disableRipple>
                                    Sınıflar
                                </Button>
                            </Link>
                        </div>
                        <div>
                            <Link to='/courses' className={classes.link}>
                                <Button
                                    onMouseOver={() => {
                                    this.setState({buttonMenuOpen: true, menuFor: 'products'})
                                }}
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
                            <Link to='/about' className={classes.link}>
                                <Button
                                    onMouseOver={() => {
                                    this.setState({buttonMenuOpen: true, menuFor: 'about'})
                                }}
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
                                    onMouseOver={() => {
                                    this.setState({buttonMenuOpen: true, menuFor: 'contact'})
                                }}
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
