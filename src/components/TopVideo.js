import React, {Component} from 'react'
import {withStyles} from '@material-ui/core';

const styles = theme => ({
    videoContainer: {
        height: '100vh',
        width: '100vw'
    }
});

class TopVideo extends Component {

    render() {

        const {classes, mouseEnter, mouseLeave, id} = this.props;

        return (
            <div className={classes.videoContainer}>
                <video autoPlay muted loop id="myVideo" style={{width: '100%'}}>
                    <source src={require('../images/intro.mp4')} type="video/mp4"/>
                </video>
            </div>
        )
    }
}

export default withStyles(styles)(TopVideo)
