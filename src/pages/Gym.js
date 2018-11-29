import React, {Component} from 'react'
import {withStyles} from '@material-ui/core/styles';
import {GridList, GridListTile, GridListTileBar, IconButton, Typography} from '@material-ui/core';
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
        color: 'rgb(254, 184, 28)'
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
        fontSize: '1.9em',
        fontFamily: '"Anton", sans-serif',
        color: 'rgb(254, 184, 28)',
        padding: '0 0 1em 0.5em'
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
                <MyTypography variant='h5'>
                    FOTOGALERİ
                </MyTypography>
                <GridList cellHeight={250} className={classes.gridList} cols={3} spacing={8}>
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
                                    className={classes.titleBar}/>
                            </GridListTile>
                        )
                    })}
                </GridList>
                <div
                    className={dialogOpen
                    ? classes.background
                    : ''}
                    onClick={this.handleClose}></div>
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
        )
    }
}

export default withStyles(styles)(Contact);