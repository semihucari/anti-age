import React, {Component} from 'react'
import {withStyles} from '@material-ui/core/styles';
import {
    GridList,
    GridListTile,
    GridListTileBar,
    IconButton,
    Typography,
    Avatar,
    Divider,
    Grid
} from '@material-ui/core';
import FullscreenIcon from '@material-ui/icons/FullscreenRounded';

const styles = theme => ({
    gymContainer: {
        marginTop: '10em',
        width: '100vw'
    },
    gridList: {
        margin: '0 1em 1em 1em !important',
        background: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgb(254, 184, 28, 0.7) 10%, rgb(254' +
                ', 184, 28, 0.7) 90%, rgba(0,0,0,0) 100%)'
    },
    titleBar: {
        background: 'linear-gradient(to bottom, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.8) 60%, rgba(0,0,0,0' +
                '.6) 80%, rgba(0,0,0,0.0) 100%)'
    },
    icon: {
        color: 'rgb(254, 184, 28)',
        '&:hover': {
            background: 'rgb(0, 0, 0, 0.5)'
        }
    },
    background: {
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        opacity: '0.2',
        background: 'rgb(255, 255, 0)'
    },
    image: {
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%) translate(0, 4em)'
    },
    hide: {
        display: 'none'
    },
    photoGallery: {
        width: '90vw',
        marginTop: '2em',
        margin: 'auto'
    },
    features: {
        width: '90vw',
        marginTop: '2em',
        textAlign: 'center',
        margin: 'auto'
    },
    itemContainer: {
        width: '23em',
        height: '19em',
        display: 'inline-block',
        padding: '0 2em 1em 2em'
    },
    trainer: {
        width: '90vw',
        paddingBottom: '2em'
    },
    avatar: {
        height: '18vw',
        width: '18vw'
    },
    divider: {
        background: 'rgb(254, 184, 28)'
    }
});

const tileData = [
    {
        img: require('../images/heavy-bag-1.jpg'),
        title: 'HeavyBag1',
        author: 'author',
        cols: 1,
        rows: 2
    }, {
        img: require('../images/ring-2.jpg'),
        title: 'Ring2',
        author: 'author',
        cols: 2,
        rows: 2
    }, {
        img: require('../images/ring.jpg'),
        title: 'Ring1',
        author: 'author',
        cols: 2,
        rows: 1
    }, {
        img: require('../images/bags-1.jpg'),
        title: 'Bag1',
        author: 'author',
        cols: 1,
        rows: 1
    }, {
        img: require('../images/mma-box.jpg'),
        title: 'MMARing1',
        author: 'author',
        cols: 2,
        rows: 2
    }, {
        img: require('../images/training-1.jpg'),
        title: 'Training1',
        author: 'author',
        cols: 1,
        rows: 2
    }
]

const MyTypography = withStyles({
    h5: {
        fontSize: '2.4em',
        fontFamily: '"Anton", sans-serif',
        color: 'rgb(254, 184, 28)',
        padding: '0 0 1em 0.5em',
        textAlign: 'left'
    },
    h4: {
        fontSize: '2em',
        fontFamily: '"Anton", sans-serif',
        color: 'rgb(254, 184, 28)',
        paddingTop: '1em'
    },
    h6: {
        fontSize: '1.2em',
        fontFamily: '"Anton", sans-serif',
        color: 'white'
    },
    h7: {
        fontSize: '2em',
        fontFamily: '"Anton", sans-serif',
        color: 'rgb(254, 184, 28)'
    }
})(Typography)

class Contact extends Component {

    state = {
        dialogOpen: false,
        img: undefined
    }

    handleDialog = (img) => event => {
        this.setState({dialogOpen: true, img});
    }

    handleClose = () => {
        this.setState({dialogOpen: false, img: undefined})
    }

    render() {

        const {classes} = this.props;
        const {img, dialogOpen} = this.state;

        return (
            <div className={classes.gymContainer}>
                <div className={classes.trainer}>
                    <Grid container direction="row" justify="center" alignItems="flex-start">
                        <Grid item xs={4}>
                            <Avatar
                                alt='Omer Balaban'
                                src={require('../images/pain.jpg')}
                                className={classes.avatar}/>
                        </Grid>
                        <Grid item xs={5}>
                            <MyTypography variant='h7'>
                                Ömer Balaban
                            </MyTypography>
                            <MyTypography variant='h6'>
                                Salon sahibi<br/>
                                Emekli profesyonel milli kick boks dövüşçüşü - Dünya şampiyonu<br/>
                                Milli antrenör<br/>
                                4. Dan usta eğitmen<br/>
                                Profesyonel MMA-Boks-Taekwondo-Muay Thai dövüşçüsü<br/>
                                25 yıllık sporcu/antrenör tecrübesi
                            </MyTypography>
                        </Grid>
                    </Grid>

                </div>
                <Divider
                    classes={{
                    root: classes.divider
                }}/>
                <div className={classes.features}>
                    <MyTypography variant='h5'>
                        Ekipmanlarımız
                    </MyTypography>
                    <div className={classes.itemContainer}>
                        <img
                            src={require('../images/regular-punching-bag.png')}
                            style={{
                            height: '10em',
                            width: '10em'
                        }}/>
                        <MyTypography variant='h4'>
                            Normal Kum Torbası
                        </MyTypography>
                    </div>
                    <div className={classes.itemContainer}>
                        <img
                            src={require('../images/punching-bag.png')}
                            style={{
                            height: '10em',
                            width: '10em'
                        }}/>
                        <MyTypography variant='h4'>
                            Uzun Kum Torbası (2m)
                        </MyTypography>
                    </div>
                    <div className={classes.itemContainer}>
                        <img
                            src={require('../images/tires.png')}
                            style={{
                            padding: '2em',
                            height: '11em',
                            width: '11em'
                        }}/>
                        <MyTypography variant='h4'>
                            Araba Lastiği Torba
                        </MyTypography>
                    </div>
                    <div className={classes.itemContainer}>
                        <img
                            src={require('../images/top-bag.png')}
                            style={{
                            padding: '2em',
                            height: '11em',
                            width: '11em'
                        }}/>
                        <MyTypography variant='h4'>
                            Yuvarlak Torba
                        </MyTypography>
                    </div>
                    <div className={classes.itemContainer}>
                        <img
                            src={require('../images/hourglass.png')}
                            style={{
                            padding: '2em',
                            height: '11em',
                            width: '11em'
                        }}/>
                        <MyTypography variant='h4'>
                            Şekilli Torba
                        </MyTypography>
                    </div>
                    <div className={classes.itemContainer}>
                        <img
                            src={require('../images/speed-bag.png')}
                            style={{
                            padding: '2em',
                            height: '10em',
                            width: '10em'
                        }}/>
                        <MyTypography variant='h4'>
                            Hız Torbası
                        </MyTypography>
                    </div>
                    <div className={classes.itemContainer}>
                        <img
                            src={require('../images/boxing-ring.png')}
                            style={{
                            padding: '2em',
                            height: '11em',
                            width: '11em'
                        }}/>
                        <MyTypography variant='h4'>
                            Ring x 2
                        </MyTypography>
                    </div>
                    <div className={classes.itemContainer}>
                        <img
                            src={require('../images/dumbbell.png')}
                            style={{
                            padding: '2em',
                            height: '11em',
                            width: '11em'
                        }}/>
                        <MyTypography variant='h4'>
                            Fitness Ağırlıkları
                        </MyTypography>
                    </div>
                </div>
                <Divider
                    classes={{
                    root: classes.divider
                }}/>
                <div className={classes.photoGallery}>
                    <MyTypography variant='h5'>
                        Foto Galeri
                    </MyTypography>
                    <GridList cellHeight={250} className={classes.gridList} cols={3} spacing={0}>
                        {tileData.map(tile => {
                            const img = tile.img;
                            return (
                                <GridListTile key={img} cols={tile.cols || 1} rows={tile.rows || 1}>
                                    <img src={img} alt={tile.title}/>
                                    <GridListTileBar
                                        titlePosition="top"
                                        actionIcon={(
                                        <IconButton className={classes.icon} onClick={this.handleDialog(img)}>
                                            <FullscreenIcon/>
                                        </IconButton>
                                    )}
                                        actionPosition="left"
                                        className={classes.titleBar}
                                        id='tile-bar'/>
                                </GridListTile>
                            )
                        })}
                    </GridList>
                    <div
                        className={dialogOpen
                        ? classes.background
                        : ''}
                        onClick={this.handleClose}/>
                    <div
                        id='img-dialog'
                        className={dialogOpen
                        ? classes.image
                        : classes.hide}>
                        <img
                            src={img}
                            style={{
                            maxWidth: '90vw',
                            maxHeight: '80vh'
                        }}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(Contact);