import React, {Component} from 'react'
import {withStyles} from '@material-ui/core/styles';
import {Typography, IconButton} from '@material-ui/core';

const styles = theme => ({
    root: {
        paddingTop: '9em',
        paddingLeft: '2em',
        background: `linear-gradient(
            rgba(187, 228, 1, 0.45), 
            rgba(0, 0, 0, 0.74)
          ), url(${require('../../images/mma-page.jpg')})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '100vh'
    },
    buttonContainer: {
        position: 'absolute',
        right: '1em',
        bottom: '1em'
    },
    buttonRoot: {
        border: 'solid 3px rgb(254, 184, 28)',
        '&:hover': {
            background: 'rgb(0, 0, 0)'
        }
    }
});

const MyTypography = withStyles({
    h5: {
        fontSize: '1.9em',
        fontFamily: '"Anton", sans-serif',
        color: 'rgb(254, 184, 28)'
    },
    subtitle1: {
        fontSize: '1em',
        fontFamily: '"Anton", sans-serif'
    }
})(Typography)

class Mma extends Component {
    render() {
        const {classes} = this.props;
        // this.props.history.goBack();
        return (
            <div className={classes.root}>
                <MyTypography variant='h5' color='secondary'>
                    MMA
                </MyTypography>
                <MyTypography
                    variant='subtitle1'
                    color='secondary'
                    style={{
                    width: '50vw'
                }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis sapien
                    sed felis malesuada suscipit. Duis euismod congue dui a dignissim. Integer
                    feugiat purus eu tortor faucibus, et sagittis sapien vehicula. Donec sodales,
                    sapien at mattis ultrices, urna augue euismod magna, quis posuere ligula orci ut
                    tortor. Ut lobortis, justo id viverra efficitur, odio velit fringilla sapien,
                    sed mattis lacus elit non turpis. Aenean et scelerisque massa. Integer quam
                    quam, efficitur at lacus ac, consequat sollicitudin ligula. Integer aliquet
                    purus sit amet sodales commodo. Aliquam tempor consequat nisl in ornare. Vivamus
                    placerat tristique ex, eu tristique ex rutrum in. Proin vitae purus odio. Morbi
                    pulvinar nunc purus, et egestas elit hendrerit vel. Pellentesque eleifend
                    lacinia mauris, a blandit ligula commodo eget. Sed in dignissim lectus, in
                    volutpat nisi. Maecenas lacinia pharetra rutrum. Etiam vel velit non orci
                    consectetur fringilla id non eros. Curabitur tempus dolor sed condimentum
                    imperdiet. Proin accumsan condimentum bibendum. Phasellus posuere non diam in
                    rutrum. Sed id pulvinar nibh, nec aliquam felis. Ut quis felis scelerisque felis
                    vulputate malesuada. Aenean ut dolor at mauris accumsan tincidunt sit amet a
                    sem.
                </MyTypography>

                <div className={classes.buttonContainer}>
                    <IconButton
                        classes={{
                        root: classes.buttonRoot
                    }}
                        onClick={() => this.props.history.goBack()}>
                        <img src={require('../../images/back.png')}/>
                    </IconButton>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(Mma);