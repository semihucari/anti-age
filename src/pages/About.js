import React, {Component} from 'react'
import {withStyles} from '@material-ui/core/styles';
import {Grid, Typography} from '@material-ui/core';
import SenseiBadge from '../components/SenseiBadge';

const styles = theme => ({
    aboutContainer: {
        marginTop: '8em',
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
                <Grid container direction="row" justify="center" alignItems="flex-start">
                    <Grid item xs={4}>
                        <img className={classes.img} src={require('../images/sensei.png')}/>
                        <MyTypography variant='h5' color='secondary'>
                            SENSEI
                        </MyTypography>
                        <MyTypography variant='subtitle2' color='secondary'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus imperdiet metus
                            quis sem luctus, sit amet dignissim massa volutpat. Aliquam ut varius quam.
                            Proin at cursus sem. Curabitur posuere, ante in accumsan tempor, urna tellus
                            elementum elit, a mattis ante.
                        </MyTypography>
                    </Grid>
                    <Grid item xs={6}>
                        <MyTypography
                            variant='subtitle1'
                            color='secondary'
                            style={{
                            width: '50vw'
                        }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque efficitur
                            odio id dolor sagittis eleifend ut blandit orci. Aliquam id nunc at tortor
                            rhoncus hendrerit non vitae metus. Aliquam vel mauris ut dui pharetra
                            sollicitudin in a metus. Suspendisse ornare ut orci aliquam ultricies. Etiam
                            aliquet pulvinar dapibus. Curabitur at ligula eleifend, dapibus justo ac,
                            euismod nunc. Suspendisse ut nunc lectus. Fusce vitae vestibulum mi, id
                            fringilla enim. Donec ex mi, gravida quis ex sit amet, interdum convallis
                            libero. Integer imperdiet diam id velit elementum, at pharetra est mattis. Nam
                            rhoncus, nisl quis condimentum convallis, sem odio porta nisl, nec tempor mauris
                            ex vitae dolor. Vivamus sed posuere felis. Maecenas lacinia congue diam et
                            auctor. Sed vitae dignissim dui, at tempus tortor. Interdum et malesuada fames
                            ac ante ipsum primis in faucibus. Curabitur ac libero quis eros lobortis porta
                            nec sed lorem. Vivamus tortor dui, accumsan non ultrices at, egestas at neque.
                            Curabitur pretium, tellus at gravida efficitur, tellus tortor congue mauris, vel
                            scelerisque nulla neque nec velit. Etiam turpis nisi, volutpat quis lacinia
                            eget, blandit nec purus. Vivamus feugiat massa eget neque varius, eget luctus
                            ipsum tristique. Fusce pulvinar consequat dui, quis rhoncus mi sagittis ut.
                            Nullam felis odio, accumsan id consectetur quis, dapibus ac felis. Nulla
                            facilisis rhoncus rutrum. Curabitur at elit sapien. Phasellus lobortis eros a
                            velit pellentesque tincidunt. Sed a maximus risus. Maecenas nec quam non nibh
                            tempus efficitur. Aenean rutrum dolor id velit accumsan sodales. Proin vel lacus
                            eu nisi vulputate aliquam.
                        </MyTypography>
                    </Grid>
                </Grid>
                <SenseiBadge/>
            </div>
        )
    }
}

export default withStyles(styles)(About);