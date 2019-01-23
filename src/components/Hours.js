import React, {Component} from 'react'
import {withStyles, Typography, Paper, Divider, Grid} from '@material-ui/core';
import {LocEn, LocTr} from '../localization/translation';

const translate = (key) => {
    const lang = localStorage.getItem('lang');
    return lang === 'tr'
        ? LocTr(key)
        : LocEn(key);
}

const styles = theme => ({
    paper: {
        height: '19em',
        width: '37vw',
        margin: '2em',
        background: 'rgb(254, 184, 28)'
    },
    title: {
        marginTop: '0.3em',
        marginBottom: '0.3em'
    },
    title2: {
        marginTop: '0.8em',
        marginBottom: '0.3em'
    },
    hoursContainer: {
        height: '12em',
        padding: '1em',
        width: '33vw'
    },
    timeContainer: {
        display: 'inline-flex',
        height: '1.3em',
        float: 'right'
    }
});

const MyTypography = withStyles({
    h5: {
        fontSize: '1.9em',
        fontFamily: '"Anton", sans-serif'
    },
    subtitle1: {
        fontSize: '1.1em',
        fontFamily: '"Anton", sans-serif'
    }
})(Typography)

class Hours extends Component {
    render() {

        const {classes} = this.props;

        return (
            <div style={{
                width: '100vw'
            }}>
                <Grid container direction="row" justify="center" alignItems="center">
                    <Grid item xs={5}>
                        <Paper className={classes.paper} elevation={0} square={true}>
                            <div className={classes.hoursContainer}>
                                <MyTypography variant='h5' className={classes.title}>
                                    {translate('workingHours')}
                                </MyTypography>
                                <Divider/>
                                <MyTypography variant='subtitle1'>
                                    {translate('monday')}
                                    <div className={classes.timeContainer}>
                                        <MyTypography variant='subtitle1'>
                                            08:00 - 23.00</MyTypography>
                                    </div>
                                </MyTypography>
                                <MyTypography variant='subtitle1'>
                                    {translate('tuesday')}
                                    <div className={classes.timeContainer}>
                                        <MyTypography variant='subtitle1'>
                                            08:00 - 23.00</MyTypography>
                                    </div>
                                </MyTypography>
                                <MyTypography variant='subtitle1'>
                                    {translate('wednesday')}
                                    <div className={classes.timeContainer}>
                                        <MyTypography variant='subtitle1'>
                                            08:00 - 23.00</MyTypography>
                                    </div>
                                </MyTypography>
                                <MyTypography variant='subtitle1'>
                                    {translate('thursday')}
                                    <div className={classes.timeContainer}>
                                        <MyTypography variant='subtitle1'>
                                            08:00 - 23.00</MyTypography>
                                    </div>
                                </MyTypography>
                                <MyTypography variant='subtitle1'>
                                    {translate('friday')}
                                    <div className={classes.timeContainer}>
                                        <MyTypography variant='subtitle1'>
                                            08:00 - 23.00</MyTypography>
                                    </div>
                                </MyTypography>
                                <MyTypography variant='subtitle1'>
                                    {translate('saturday')}
                                    <div className={classes.timeContainer}>
                                        <MyTypography variant='subtitle1'>
                                            08:00 - 23.00</MyTypography>
                                    </div>
                                </MyTypography>
                                <MyTypography variant='subtitle1'>
                                    {translate('sunday')}
                                    <div className={classes.timeContainer}>
                                        <MyTypography variant='subtitle1'>
                                            08:00 - 23.00</MyTypography>
                                    </div>
                                </MyTypography>
                            </div>
                        </Paper>
                    </Grid>
                    <Grid item xs={5}>
                        <Paper className={classes.paper} elevation={0} square={true}>
                            <div className={classes.hoursContainer}>
                                <MyTypography variant='h5' className={classes.title}>
                                    {translate('address')}
                                </MyTypography>
                                <Divider/>
                                <MyTypography variant='subtitle1'>
                                    {translate('location')}
                                </MyTypography>
                                <MyTypography variant='h5' className={classes.title2}>
                                    {translate('phone')}
                                </MyTypography>
                                <Divider/>
                                <MyTypography variant='subtitle1'>
                                    0553 619 97 68
                                </MyTypography>
                                <MyTypography variant='subtitle1'>
                                    balabanomer73@gmail.com
                                </MyTypography>
                            </div>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default withStyles(styles)(Hours);