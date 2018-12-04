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
          ), url(${require('../../images/muay-thai-page.jpg')})`,
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

class MuayThai extends Component {
    render() {
        const {classes} = this.props;
        // this.props.history.goBack();
        return (
            <div className={classes.root}>
                <MyTypography variant='h5' color='secondary'>
                    {translate('muayThai')}
                </MyTypography>
                <MyTypography
                    variant='subtitle1'
                    color='secondary'
                    style={{
                    width: '50vw'
                }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque in convallis
                    mauris. Curabitur condimentum lacus quis libero pretium, vitae malesuada ipsum
                    semper. Vivamus quis ex quis metus aliquam ullamcorper. Maecenas nisl magna,
                    varius id fermentum eu, vestibulum id nunc. Aenean ut convallis arcu, at lacinia
                    dui. Integer accumsan tempor felis, quis tristique nulla lacinia et. Sed eget
                    nisi elit. Pellentesque sed tincidunt leo, sit amet ultrices tortor. Phasellus
                    facilisis nulla magna. Sed consequat, justo in pretium auctor, nulla urna
                    condimentum tortor, et scelerisque dui eros at est. Etiam et tellus porta,
                    sagittis libero eu, venenatis metus. Sed elementum tincidunt tincidunt. Maecenas
                    dignissim quam enim. Aenean lorem nibh, vestibulum eget felis quis, semper
                    aliquet metus. Nullam ac imperdiet turpis, sit amet gravida erat. Sed vel
                    accumsan tortor, at eleifend libero. Nullam mattis lacus at turpis commodo
                    dictum. Aenean dapibus auctor libero. Phasellus pulvinar, eros at mattis semper,
                    massa nunc rutrum libero, eu commodo orci sem pellentesque lectus. Vivamus
                    volutpat ligula nec urna egestas, sed blandit ligula congue. Praesent varius
                    ante sit amet ligula feugiat molestie. Donec posuere laoreet erat. Nullam a
                    nulla sem. Suspendisse eget enim nulla. In consequat quis nunc in dapibus. Sed
                    pretium felis at augue ornare, vitae facilisis orci vestibulum. Duis gravida, ex
                    quis iaculis lobortis, est metus malesuada erat, a sodales urna leo eget neque.
                    Donec odio nulla, vestibulum eget gravida in, mollis quis neque.
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

export default withStyles(styles)(MuayThai);