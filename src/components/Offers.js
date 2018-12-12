import React, {Component} from 'react'
import {withStyles} from '@material-ui/core/styles';
import {LocEn, LocTr} from '../localization/translation';
import {Typography} from '@material-ui/core';

const translate = (key) => {
    const lang = localStorage.getItem('lang');
    return lang === 'tr'
        ? LocTr(key)
        : LocEn(key);
}

const styles = theme => ({
    flexContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        width: '100%',
        height: '100%'
    },
    innerFlexContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%'
    },
    flexItem: {
        background: '#f05a1a',
        width: '20%',
        height: '10%',
        textAlign: 'center'
    }
});

const MyTypography = withStyles({
    h4: {
        fontSize: '1.2em',
        color: 'white',
        background: '#f16b2b',
        padding: '.2em 0 .2em 0',
        fontWeight: 100
    },
    h5: {
        fontSize: '2.3em',
        fontFamily: '"Roboto", sans-serif',
        color: 'white',
        paddingTop: '.2em'
    }
})(Typography)

class Offers extends Component {
    render() {

        const {classes} = this.props;

        return (
            <div className={classes.flexContainer}>
                
                <div className={classes.innerFlexContainer}>
                    <div className={classes.flexItem}>
                        <MyTypography variant='h4'>
                            Grup - 1 ay
                        </MyTypography>
                        <MyTypography variant='h5'>
                            200₺
                        </MyTypography>
                    </div>
                    <div className={classes.flexItem}>
                        <MyTypography variant='h4'>
                            Grup - 3 ay
                        </MyTypography>
                        <MyTypography variant='h5'>
                            500₺
                        </MyTypography>
                    </div>
                    <div className={classes.flexItem}>
                        <MyTypography variant='h4'>
                            Grup - 6 ay
                        </MyTypography>
                        <MyTypography variant='h5'>
                            850₺
                        </MyTypography>
                    </div>
                    <div className={classes.flexItem}>
                        <MyTypography variant='h4'>
                            Grup - 1 yıl
                        </MyTypography>
                        <MyTypography variant='h5'>
                            1500₺
                        </MyTypography>
                    </div>
                </div>

                <div className={classes.innerFlexContainer}>
                    <div className={classes.flexItem}>
                        <MyTypography variant='h4'>
                            Grup - 1 ay
                        </MyTypography>
                        <MyTypography variant='h5'>
                            200₺
                        </MyTypography>
                    </div>
                    <div className={classes.flexItem}>
                        <MyTypography variant='h4'>
                            Grup - 3 ay
                        </MyTypography>
                        <MyTypography variant='h5'>
                            500₺
                        </MyTypography>
                    </div>
                    <div className={classes.flexItem}>
                        <MyTypography variant='h4'>
                            Grup - 6 ay
                        </MyTypography>
                        <MyTypography variant='h5'>
                            850₺
                        </MyTypography>
                    </div>
                    <div className={classes.flexItem}>
                        <MyTypography variant='h4'>
                            Grup - 1 yıl
                        </MyTypography>
                        <MyTypography variant='h5'>
                            1500₺
                        </MyTypography>
                    </div>
                </div>

                <div className={classes.innerFlexContainer}>
                    <div className={classes.flexItem}>
                        <MyTypography variant='h4'>
                            Grup - 1 ay
                        </MyTypography>
                        <MyTypography variant='h5'>
                            200₺
                        </MyTypography>
                    </div>
                    <div className={classes.flexItem}>
                        <MyTypography variant='h4'>
                            Grup - 3 ay
                        </MyTypography>
                        <MyTypography variant='h5'>
                            500₺
                        </MyTypography>
                    </div>
                    <div className={classes.flexItem}>
                        <MyTypography variant='h4'>
                            Grup - 6 ay
                        </MyTypography>
                        <MyTypography variant='h5'>
                            850₺
                        </MyTypography>
                    </div>
                    <div className={classes.flexItem}>
                        <MyTypography variant='h4'>
                            Grup - 1 yıl
                        </MyTypography>
                        <MyTypography variant='h5'>
                            1500₺
                        </MyTypography>
                    </div>
                </div>

            </div>
        )
    }
}

export default withStyles(styles)(Offers);