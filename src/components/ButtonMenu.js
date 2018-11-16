import React, {Component} from 'react'
import {withStyles} from '@material-ui/core/styles';
import {Button} from '@material-ui/core';

const styles = theme => ({
    buttonLarge: {
        height: '-webkit-fill-available'
    },
    buttonMenu: {
        textAlign: 'center'
    },
    labelLight: {
        fontWeight: 100
    },
    iconContainer: {
        display: 'inline-flex',
        cursor: 'pointer'
    },
    imgResize: {
        width: '8vh',
        height: '8vh',
        marginTop: '0.5rem',
        marginRight: '1rem'
    }
});

class ButtonMenu extends Component {
    render() {

        const {classes} = this.props;

        return (
            <div className={classes.buttonMenu}>
                <div className={classes.iconContainer}>
                    <img src={require('../images/cosmetics.png')} className={classes.imgResize}/>
                </div>
                <div className={classes.iconContainer}>
                    <img src={require('../images/lotion.png')} className={classes.imgResize}/>
                </div>
                <div className={classes.iconContainer}>
                    <img src={require('../images/facial-mask.png')} className={classes.imgResize}/>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(ButtonMenu);