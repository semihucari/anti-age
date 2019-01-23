import React, {Component} from 'react'
import {withStyles} from '@material-ui/core/styles';
import {Grid, Typography} from '@material-ui/core';
import {LocEn, LocTr} from '../localization/translation';
import {Link} from "react-router-dom";

const translate = (key) => {
    const lang = localStorage.getItem('lang');
    return lang === 'tr'
        ? LocTr(key)
        : LocEn(key);
}

const styles = theme => ({
    footerContainer: {
        height: '2em',
        background: 'black',
        marginTop: '11em',
        position: 'relative'
    },
    rowContainer: {
        maxWidth: '250px'
    },
    subgroupContainer: {
        marginTop: '2vh'
    },
    mediaIcon: {
        background: 'white',
        marginTop: '2vh',
        marginRight: '1vh',
        cursor: 'pointer'
    },
    subtitle1: {
        fontWeight: 100
    },
    body2: {
        fontWeight: 100
    },
    overline: {
        fontWeight: 200,
        fontSize: '0.7em'
    },
    copyrights: {},
    contact: {
        textAlign: 'right'
    }
});

class Footer extends Component {
    render() {

        const {classes} = this.props;

        return (
            <div className={classes.footerContainer}>
                <Grid container direction="row" justify="space-around" alignItems="center">
                    <Grid item xs={3}>
                        <a
                            href='https://instagram.com/omerbalabn_fghtacademiy?utm_source=ig_profile_share&igshid=10ab5z274aplk'>
                            <img className={classes.mediaIcon} src={require('../images/instagram.png')}/>
                        </a>
                        <a href="https://www.youtube.com/channel/UCtx3vLCkwcvXVsfcfBOqf9w">
                            <img className={classes.mediaIcon} src={require('../images/youtube.png')}/>
                        </a>
                        <a href="https://www.facebook.com/omer.balaban.7547">
                            <img className={classes.mediaIcon} src={require('../images/facebook.png')}/>
                        </a>
                    </Grid>
                    <Grid item xs={3}>
                        <Typography
                            variant="overline"
                            className={classes.copyrights}
                            classes={{
                            overline: classes.overline
                        }}
                            color="secondary">
                            © ÖMER BALABAN FİGHT ACADEMY TÜM HAKLARI SAKLIDIR.
                        </Typography>
                    </Grid>
                    <Grid item xs={3}>
                        <Typography
                            variant="overline"
                            className={classes.contact}
                            classes={{
                            overline: classes.overline
                        }}
                            color="secondary">
                            balabanomer73@gmail.com<br/>0553 619 97 68
                        </Typography>
                    </Grid>
                </Grid>
            </div>
        )

    }
}

export default withStyles(styles)(Footer);