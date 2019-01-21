import React, {Component} from 'react'
import {withStyles} from '@material-ui/core/styles';
import {LocEn, LocTr} from '../localization/translation';
import {Grid, Typography, Divider} from '@material-ui/core';

const translate = (key) => {
    const lang = localStorage.getItem('lang');
    return lang === 'tr'
        ? LocTr(key)
        : LocEn(key);
}

const styles = theme => ({
    divider: {
        backgroundColor: '#feb81c',
        margin: '2em auto 2em auto',
        width: '3em'
    }
});

const MyTypography = withStyles({
    h4: {
        fontSize: '1.7em',
        fontFamily: '"Anton", sans-serif',
        color: '#feb81c',
        margin: '1em 0 1em 0'
    },
    h5: {
        fontSize: '1.3em',
        fontFamily: '"Roboto", sans-serif',
        color: 'white',
        fontWeight: 200
    }
})(Typography)

class BannerNext extends Component {
    render() {

        const {classes} = this.props;

        return (
            <div className='banner-next'>
                <Grid
                    container
                    direction="row"
                    justify="space-evenly"
                    alignItems="center"
                    style={{
                    textAlign: 'center',
                    height: '100%'
                }}>
                    <Grid item xs={4}>
                        <img src={require('../images/locker.png')} className={classes.img}/>
                        <MyTypography variant='h4'>
                            {translate('lockerRooms')}
                        </MyTypography>
                        <Divider variant="middle" className={classes.divider}/>
                        <MyTypography variant='h5'>
                            {translate('lockerRoomsText')}
                        </MyTypography>
                    </Grid>
                    <Grid item xs={4}>
                        <img src={require('../images/value.png')} className={classes.img}/>
                        <MyTypography variant='h4'>
                            {translate('brandNew')}
                        </MyTypography>
                        <Divider variant="middle" className={classes.divider}/>
                        <MyTypography variant='h5'>
                            {translate('brandNewText')}
                        </MyTypography>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default withStyles(styles)(BannerNext);