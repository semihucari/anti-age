import React, {Component} from 'react'
import {withStyles} from '@material-ui/core/styles';
import {Grid, Typography} from '@material-ui/core';

const styles = theme => ({
    footerContainer: {
        height: '25vh',
        background: 'black',
        marginTop: '2vh',
        paddingTop: '1vh',
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
        fontSize: 12
    },
    copyrights: {
        position: 'absolute',
        bottom: 0
    },
    contact: {
        position: 'absolute',
        bottom: 0,
        left: '100%',
        transform: 'translate(-100%)',
        paddingRight: '1vw'
    }
});

class Footer extends Component {
    render() {

        const {classes} = this.props;

        return (
            <div className={classes.footerContainer}>
                <Grid container direction="row" justify="space-evenly" alignItems="flex-start">
                    <Grid item xs={3}>
                        <div className={classes.rowContainer}>
                            <Typography
                                classes={{
                                subtitle1: classes.subtitle1
                            }}
                                className={classes.title}
                                variant="subtitle1"
                                color="secondary"
                                noWrap>
                                KURUMSAL
                            </Typography>
                            <div className={classes.subgroupContainer}>
                                <Typography
                                    className={classes.title}
                                    classes={{
                                    body2: classes.body2
                                }}
                                    variant="body2"
                                    color="secondary"
                                    noWrap>
                                    Hakkımızda
                                </Typography>
                                <Typography
                                    className={classes.title}
                                    classes={{
                                    body2: classes.body2
                                }}
                                    variant="body2"
                                    color="secondary"
                                    noWrap>
                                    Basında Biz
                                </Typography>
                                <Typography
                                    className={classes.title}
                                    classes={{
                                    body2: classes.body2
                                }}
                                    variant="body2"
                                    color="secondary"
                                    noWrap>
                                    Bize Ulaşın
                                </Typography>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={3}>
                        <div className={classes.rowContainer}>
                            <Typography
                                className={classes.title}
                                classes={{
                                subtitle1: classes.subtitle1
                            }}
                                variant="subtitle1"
                                color="secondary"
                                noWrap>
                                İPUÇLARI
                            </Typography>
                            <div className={classes.subgroupContainer}>
                                <Typography
                                    className={classes.title}
                                    classes={{
                                    body2: classes.body2
                                }}
                                    variant="body2"
                                    color="secondary"
                                    noWrap>
                                    Güzellik Tavsiyeleri
                                </Typography>
                                <Typography
                                    className={classes.title}
                                    classes={{
                                    body2: classes.body2
                                }}
                                    variant="body2"
                                    color="secondary"
                                    noWrap>
                                    Sıkça Sorulan Sorular
                                </Typography>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={3}>
                        <div className={classes.rowContainer}>
                            <img className={classes.mediaIcon} src={require('../images/instagram.png')}/>
                            <img className={classes.mediaIcon} src={require('../images/facebook.png')}/>
                            <img className={classes.mediaIcon} src={require('../images/twitter.png')}/>
                            <img className={classes.mediaIcon} src={require('../images/youtube.png')}/>
                        </div>
                    </Grid>
                </Grid>
                <Typography
                    variant="overline"
                    className={classes.copyrights}
                    classes={{
                    overline: classes.overline
                }}
                    color="secondary">
                    © INTERPHARM İLAÇ SAN. TİC. LTD. ŞTİ TÜM HAKLARI SAKLIDIR.
                </Typography>
                <Typography
                    variant="overline"
                    className={classes.contact}
                    classes={{
                    overline: classes.overline
                }}
                    color="secondary">
                    INFO@INTERPHARM.COM.TR      +90 212 500 35 35
                </Typography>
            </div>
        )

    }
}

export default withStyles(styles)(Footer);