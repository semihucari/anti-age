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
          ), url(${require('../../images/kick-box-page.jpg')})`,
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

class KickBox extends Component {
    render() {
        const {classes} = this.props;
        // this.props.history.goBack();
        return (
            <div className={classes.root}>
                <MyTypography variant='h5' color='secondary'>
                    KICKBOX
                </MyTypography>
                <MyTypography
                    variant='subtitle1'
                    color='secondary'
                    style={{
                    width: '50vw'
                }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec risus egestas,
                    imperdiet urna nec, aliquam urna. Nullam iaculis arcu nec viverra blandit.
                    Curabitur eleifend nulla nisi, euismod interdum quam tempor dapibus. Orci varius
                    natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis
                    vitae rhoncus felis. Aliquam quis mi dapibus, dictum dui accumsan, volutpat leo.
                    Pellentesque auctor nunc vel dignissim facilisis. Sed eu urna in ex fringilla
                    tincidunt sit amet aliquet ante. Vestibulum ante ipsum primis in faucibus orci
                    luctus et ultrices posuere cubilia Curae; Sed sagittis consectetur nunc, nec
                    eleifend lorem bibendum at. Pellentesque pellentesque ligula eget massa
                    facilisis lobortis. Nullam sodales nunc nibh, sit amet scelerisque lacus
                    ultrices commodo. Pellentesque molestie neque eget risus gravida, eu consectetur
                    leo sollicitudin. Morbi in tellus laoreet, posuere ex vitae, hendrerit justo.
                    Vivamus neque metus, consequat volutpat nibh eu, varius rutrum magna. Proin
                    dignissim dolor a fringilla pulvinar. Vivamus condimentum ante aliquet felis
                    ultrices, eu sollicitudin sapien consequat. Donec lectus dolor, viverra ac
                    fermentum quis, vehicula congue dui. Sed justo diam, hendrerit sit amet viverra
                    sed, condimentum nec diam. Quisque semper quam ut mi vehicula maximus. Nunc
                    elementum, nibh accumsan ullamcorper tempor, quam felis luctus arcu, nec
                    pharetra diam purus quis eros. Praesent porta erat in ex pellentesque, vitae
                    dictum turpis mattis. Proin laoreet ligula et sem sagittis, vitae fringilla orci
                    ornare. Sed sit amet imperdiet arcu, at bibendum nisi. Integer vitae ligula mi.
                    Vestibulum massa dolor, aliquet eu rhoncus et, venenatis eget est.
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

export default withStyles(styles)(KickBox);