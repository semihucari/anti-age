import React, {Component} from 'react'
import {withStyles} from '@material-ui/core/styles';
import {Typography, IconButton} from '@material-ui/core';
import {LocEn, LocTr} from '../../localization/translation';

const translate = (key) => {
    const lang = localStorage.getItem('lang');
    return lang === 'tr'
        ? LocTr(key)
        : LocEn(key);
}

const styles = theme => ({
    root: {
        paddingTop: '9em',
        paddingLeft: '2em',
        background: `linear-gradient(
            rgba(187, 228, 1, 0.45), 
            rgba(0, 0, 0, 0.74)
          ), url(${require('../../images/wushu-page.jpg')})`,
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

class Wushu extends Component {
    render() {
        const {classes} = this.props;
        // this.props.history.goBack();
        return (
            <div className={classes.root}>
                <MyTypography variant='h5' color='secondary'>
                    {translate('wushu')}
                </MyTypography>
                <MyTypography
                    variant='subtitle1'
                    color='secondary'
                    style={{
                    width: '50vw'
                }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a diam justo.
                    Proin et gravida quam, vel consectetur est. Nullam suscipit leo turpis, non
                    tempus enim laoreet nec. Nulla facilisi. Quisque imperdiet, est id consequat
                    fringilla, velit nisi vestibulum ex, at condimentum ante elit et odio. Nulla
                    maximus faucibus mauris eget bibendum. Cras ultricies, justo nec efficitur
                    ullamcorper, augue nisl condimentum elit, nec euismod nibh metus sagittis elit.
                    Vivamus accumsan auctor tempus. Maecenas dolor sapien, ullamcorper sit amet
                    mollis vitae, luctus ut nulla. Aenean ornare enim felis, et auctor odio viverra
                    quis. Pellentesque dignissim tortor non nibh condimentum euismod. Vestibulum ac
                    dolor id erat condimentum tincidunt quis consectetur nisi. Mauris pharetra
                    congue placerat. Pellentesque varius purus nec libero ullamcorper efficitur.
                    Maecenas orci nunc, vestibulum at libero in, semper auctor elit. Orci varius
                    natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                    Pellentesque fringilla elementum nunc ultrices mollis. Donec ullamcorper elit
                    vitae molestie porta. Donec mattis dui tortor, eu porta sapien accumsan eget.
                    Etiam non elementum massa, eget posuere ex. Vivamus quis quam ultrices,
                    imperdiet neque nec, sodales orci. Etiam malesuada accumsan auctor. Mauris
                    maximus leo massa, quis facilisis arcu tincidunt eu. Suspendisse ac venenatis
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

export default withStyles(styles)(Wushu);