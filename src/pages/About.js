import React, {Component} from 'react'
import {withStyles} from '@material-ui/core/styles';
import {Grid, Typography} from '@material-ui/core';
import SenseiBadge from '../components/SenseiBadge';
import {LocEn, LocTr} from '../localization/translation';

const translate = (key) => {
    const lang = localStorage.getItem('lang');
    return lang === 'tr'
        ? LocTr(key)
        : LocEn(key);
}

const styles = theme => ({
    aboutContainer: {
        marginTop: '9em',
        width: '100vw'
    },
    img: {
        height: '30em'
    }
});

const MyTypography = withStyles({
    h5: {
        fontSize: '1.9em',
        fontFamily: '"Anton", sans-serif',
        color: 'rgb(254, 184, 28)',
        textAlign: 'left',
        paddingTop: '1em'
    },
    subtitle1: {
        fontSize: '1em',
        fontFamily: '"Anton", sans-serif',
        textAlign: 'left',
        padding: '1em 2em 0 0'
    },
    subtitle2: {
        fontSize: '0.9em',
        fontFamily: '"Anton", sans-serif',
        textAlign: 'left',
        padding: '0 2em 0 0'
    }
})(Typography)

class About extends Component {
    render() {

        const {classes} = this.props;

        return (
            <div className={classes.aboutContainer}>
                <Grid container direction="row" justify="space-around" alignItems="flex-start">
                    <Grid item xs={4}>
                        <img className={classes.img} src={require('../images/balaban.jpeg')}/>
                        <MyTypography variant='h5' color='secondary'>
                            Ömer Balaban
                        </MyTypography>
                    </Grid>
                    <Grid item xs={5}>
                        <MyTypography
                            variant='subtitle1'
                            color='secondary'>
                            {translate('aboutText')}
                        </MyTypography>
                    </Grid>
                </Grid>
                <SenseiBadge/>
            </div>
        )
    }
}

export default withStyles(styles)(About);