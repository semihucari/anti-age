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
import {LocEn, LocTr} from '../localization/translation';

const translate = (key) => {
    const lang = localStorage.getItem('lang');
    return lang === 'tr'
        ? LocTr(key)
        : LocEn(key);
}

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
    },
    zoom: {
        transition: 'all .2s',
        '&:hover': {
            filter: 'sepia(60%)'
        }
    }
});

const tileData = [
    {
        img: require('../images/15.34.15.jpeg'),
        title: '15.34.15.jpeg',
        author: 'author',
        cols: 2,
        rows: 2
    }, {
        img: require('../images/15.34.19.jpeg'),
        title: '15.34.19.jpeg',
        author: 'author',
        cols: 1,
        rows: 2
    }, {
        img: require('../images/15.34.14.jpeg'),
        title: '15.34.14.jpeg',
        author: 'author',
        cols: 1,
        rows: 2
    }, {
        img: require('../images/15.34.13.jpeg'),
        title: '15.34.13.jpeg',
        author: 'author',
        cols: 2,
        rows: 2
    }, {
        img: require('../images/15.34.09.jpeg'),
        title: '15.34.09.jpeg',
        author: 'author',
        cols: 2,
        rows: 2
    }, {
        img: require('../images/15.34.16 (1).jpeg'),
        title: '15.34.16 (1).jpeg',
        author: 'author',
        cols: 1,
        rows: 2
    }, {
        img: require('../images/15.34.14 (1).jpeg'),
        title: '15.34.14 (1).jpeg',
        author: 'author',
        cols: 1,
        rows: 2
    }, {
        img: require('../images/15.34.16.jpeg'),
        title: '15.34.16.jpeg',
        author: 'author',
        cols: 1,
        rows: 2
    }, {
        img: require('../images/15.34.17.jpeg'),
        title: '15.34.17.jpeg',
        author: 'author',
        cols: 1,
        rows: 2
    }, {
        img: require('../images/15.34.18 (1).jpeg'),
        title: '15.34.18 (1).jpeg',
        author: 'author',
        cols: 1,
        rows: 2
    }, {
        img: require('../images/15.34.18.jpeg'),
        title: '15.34.18.jpeg',
        author: 'author',
        cols: 1,
        rows: 2
    }, {
        img: require('../images/WhatsApp Image 2018-12-03 at 15.35.02.jpeg'),
        title: 'WhatsApp Image 2018-12-03 at 15.35.02.jpeg',
        author: 'author',
        cols: 1,
        rows: 2
    }, {
        img: require('../images/WhatsApp Image 2018-12-03 at 15.43.43.jpeg'),
        title: 'WhatsApp Image 2018-12-03 at 15.43.43.jpeg',
        author: 'author',
        cols: 1,
        rows: 2
    }, {
        img: require('../images/WhatsApp Image 2018-12-03 at 15.44.12.jpeg'),
        title: 'WhatsApp Image 2018-12-03 at 15.44.12.jpeg',
        author: 'author',
        cols: 1,
        rows: 2
    }, {
        img: require('../images/WhatsApp Image 2018-12-03 at 15.44.13 (1).jpeg'),
        title: 'WhatsApp Image 2018-12-03 at 15.44.13 (1).jpeg',
        author: 'author',
        cols: 1,
        rows: 2
    }, {
        img: require('../images/WhatsApp Image 2018-12-03 at 15.44.13 (2).jpeg'),
        title: 'WhatsApp Image 2018-12-03 at 15.44.13 (2).jpeg',
        author: 'author',
        cols: 1,
        rows: 2
    }, {
        img: require('../images/WhatsApp Image 2018-12-03 at 15.44.13.jpeg'),
        title: 'WhatsApp Image 2018-12-03 at 15.44.13.jpeg',
        author: 'author',
        cols: 1,
        rows: 2
    }, {
        img: require('../images/WhatsApp Image 2018-12-03 at 15.44.14 (1).jpeg'),
        title: 'WhatsApp Image 2018-12-03 at 15.44.14 (1).jpeg',
        author: 'author',
        cols: 1,
        rows: 2
    }, {
        img: require('../images/WhatsApp Image 2018-12-03 at 15.44.14 (2).jpeg'),
        title: 'WhatsApp Image 2018-12-03 at 15.44.14 (2).jpeg',
        author: 'author',
        cols: 1,
        rows: 2
    }, {
        img: require('../images/WhatsApp Image 2018-12-03 at 15.44.14.jpeg'),
        title: 'WhatsApp Image 2018-12-03 at 15.44.14.jpeg',
        author: 'author',
        cols: 1,
        rows: 2
    }, {
        img: require('../images/WhatsApp Image 2018-12-03 at 15.44.15 (1).jpeg'),
        title: 'WhatsApp Image 2018-12-03 at 15.44.15 (1).jpeg',
        author: 'author',
        cols: 1,
        rows: 2
    }, {
        img: require('../images/WhatsApp Image 2018-12-03 at 15.44.15.jpeg'),
        title: 'WhatsApp Image 2018-12-03 at 15.44.15.jpeg',
        author: 'author',
        cols: 1,
        rows: 2
    }, {
        img: require('../images/WhatsApp Image 2018-12-03 at 15.44.16.jpeg'),
        title: 'WhatsApp Image 2018-12-03 at 15.44.16.jpeg',
        author: 'author',
        cols: 2,
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
        color: 'white',
        whiteSpace: 'pre-line'
    },
    h3: {
        fontSize: '2em',
        fontFamily: '"Anton", sans-serif',
        color: 'rgb(254, 184, 28)',
        marginBottom: '.7em'
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
                                src={require('../images/balaban.jpeg')}
                                className={classes.avatar}/>
                        </Grid>
                        <Grid item xs={5}>
                            <MyTypography variant='h3'>
                                Ömer Balaban
                            </MyTypography>
                            <MyTypography variant='h6'>
                                {translate('balabanSummarize')}
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
                        {translate('equipments')}
                    </MyTypography>
                    <div className={classes.itemContainer}>
                        <img
                            src={require('../images/regular-punching-bag.png')}
                            style={{
                            height: '10em',
                            width: '10em'
                        }}/>
                        <MyTypography variant='h4'>
                            {translate('punchingBag')}
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
                            {translate('punchingBagLong')}
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
                            {translate('tireBag')}
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
                            {translate('ballBag')}
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
                            {translate('curvedBag')}
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
                            {translate('speedBag')}
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
                            {translate('ringx2')}
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
                            {translate('weights')}
                        </MyTypography>
                    </div>
                </div>
                <Divider
                    classes={{
                    root: classes.divider
                }}/>
                <div className={classes.photoGallery}>
                    <MyTypography variant='h5'>
                        {translate('photoGallery')}
                    </MyTypography>
                    <GridList cellHeight={250} className={classes.gridList} cols={3} spacing={0}>
                        {tileData.map(tile => {
                            const img = tile.img;
                            return (
                                <GridListTile
                                    key={img}
                                    cols={tile.cols || 1}
                                    rows={tile.rows || 1}
                                    className={classes.zoom}>
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