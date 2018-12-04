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
          ), url(${require('../../images/box-page.png')})`,
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

class Box extends Component {
    render() {
        const {classes} = this.props;
        // this.props.history.goBack();
        return (
            <div className={classes.root}>
                <MyTypography variant='h5' color='secondary'>
                    {translate('boxing')}
                </MyTypography>
                <MyTypography
                    variant='subtitle1'
                    color='secondary'
                    style={{
                    width: '50vw'
                }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ullamcorper,
                    diam at aliquet tristique, leo nibh porttitor lorem, quis aliquet eros nunc eu
                    nisi. Pellentesque convallis nulla in interdum pellentesque. Nulla consequat
                    malesuada magna a ullamcorper. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Nunc suscipit elit at gravida feugiat. Morbi pretium tellus
                    ipsum, ut mattis enim tempus in. Nulla fringilla nisl ac lacus vestibulum
                    sodales. Sed porta blandit ante, vitae pharetra neque aliquet non. Sed tincidunt
                    ligula sed interdum hendrerit. In hac habitasse platea dictumst. Aenean feugiat
                    odio enim, sit amet fermentum urna facilisis ut. Quisque nec nibh egestas,
                    commodo ante eget, dapibus dui. Morbi sed justo imperdiet, imperdiet sapien vel,
                    laoreet felis. Integer tincidunt facilisis eros, sit amet porttitor turpis
                    eleifend fermentum. Morbi vitae metus rhoncus, egestas libero non, volutpat
                    enim. In vulputate aliquet ultricies. Mauris aliquam nisi sed enim gravida
                    iaculis. Curabitur non pharetra urna. Pellentesque et velit molestie, dignissim
                    arcu eu, luctus tortor. Donec ut leo sit amet mi pellentesque tempor. Nunc sed
                    velit diam. Cras ullamcorper viverra volutpat. Cras iaculis porta consequat.
                    Donec eget egestas eros. Quisque non sollicitudin tortor. Integer luctus velit
                    nisl, eu mattis dui consectetur ut. Maecenas ut elit ante. Praesent porta
                    pretium nulla, interdum cursus quam. Maecenas eget tellus cursus, placerat enim
                    sit amet, rutrum neque. Cras fermentum molestie dui, at porta nunc pulvinar non.
                    Aliquam nec sapien non dui hendrerit malesuada. Nullam tempor lorem a hendrerit
                    posuere.
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

export default withStyles(styles)(Box);