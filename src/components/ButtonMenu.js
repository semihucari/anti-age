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
        width: '3em',
        height: '3em',
        marginTop: '1em',
        marginRight: '1em'
    }
});

class ButtonMenu extends Component {
    render() {

        const {classes, menuFor} = this.props;

        return (
            <div>

                {menuFor === 'products' && <div className={classes.buttonMenu}>
                    <div className={classes.iconContainer}>
                        <img src={require('../images/cosmetics.png')} className={classes.imgResize}/>
                    </div>
                    <div className={classes.iconContainer}>
                        <img src={require('../images/lotion.png')} className={classes.imgResize}/>
                    </div>
                    <div className={classes.iconContainer}>
                        <img src={require('../images/facial-mask.png')} className={classes.imgResize}/>
                    </div>
                </div>}

                {menuFor === 'about' && <div className={classes.buttonMenu}>
                    <div className={classes.iconContainer}>
                        <img src={require('../images/history.png')} className={classes.imgResize}/>
                    </div>
                    <div className={classes.iconContainer}>
                        <img src={require('../images/flour.png')} className={classes.imgResize}/>
                    </div>
                    <div className={classes.iconContainer}>
                        <img src={require('../images/care.png')} className={classes.imgResize}/>
                    </div>
                </div>}

                {menuFor === 'contact' && <div className={classes.buttonMenu}>
                    <div className={classes.iconContainer}>
                        <img src={require('../images/call.png')} className={classes.imgResize}/>
                    </div>
                    <div className={classes.iconContainer}>
                        <img src={require('../images/email.png')} className={classes.imgResize}/>
                    </div>
                    <div className={classes.iconContainer}>
                        <img src={require('../images/map.png')} className={classes.imgResize}/>
                    </div>
                </div>}

            </div>
        )
    }
}

export default withStyles(styles)(ButtonMenu);