import React, {Component} from 'react'
import {withStyles} from '@material-ui/core/styles';
import {LocEn, LocTr} from '../localization/translation';
import {Grid, Typography} from '@material-ui/core';

const translate = (key) => {
    const lang = localStorage.getItem('lang');
    return lang === 'tr'
        ? LocTr(key)
        : LocEn(key);
}

const styles = theme => ({
    container: {
        width: '100vw',
        height: '70vh',
        background: 'black'
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
            <div className={classes.container}>
                <Grid
                    container
                    direction="row"
                    justify="space-evenly"
                    alignItems="flex-start"
                    style={{
                    textAlign: 'center',
                    marginTop: '4em'
                }}>
                    <Grid item xs={4}>
                        <img src={require('../images/locker.png')} className={classes.img}/>
                        <MyTypography variant='h4'>
                            Tam Donanımlı Soyunma Odaları
                        </MyTypography>
                        <MyTypography variant='h5'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec neque libero.
                            Vivamus id mi nec urna convallis tincidunt. Suspendisse auctor dui eget sem
                            porttitor accumsan. Ut vehicula justo felis.
                        </MyTypography>
                    </Grid>
                    <Grid item xs={4}>
                        <img src={require('../images/value.png')} className={classes.img}/>
                        <MyTypography variant='h4'>
                            Yepyeni Ekipmanlar
                        </MyTypography>
                        <MyTypography variant='h5'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet lectus
                            consectetur, maximus tellus ut, viverra mi. Maecenas ac massa at enim tristique
                            convallis sed fermentum velit. Phasellus sagittis.
                        </MyTypography>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default withStyles(styles)(BannerNext);