import React, {Component} from 'react'
import {withStyles} from '@material-ui/core/styles';
import {
    Typography,
    IconButton,
    GridList,
    GridListTile,
    GridListTileBar,
    Dialog
} from '@material-ui/core';
import {LocEn, LocTr} from '../../localization/translation';
import FullscreenIcon from '@material-ui/icons/FullscreenRounded';

const translate = (key) => {
    const lang = localStorage.getItem('lang');
    return lang === 'tr'
        ? LocTr(key)
        : LocEn(key);
}

const styles = theme => ({
    gridList: {
        margin: '0 1em 1em 1em !important',
        background: 'black'
    },
    titleBar: {
        background: 'linear-gradient(to bottom, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.8) 60%, rgba(0,0,0,0' +
                '.6) 80%, rgba(0,0,0,0.0) 100%)'
    },
    icon: {
        color: 'rgb(254, 184, 28)',
        transition: 'all .5s',
        '&:hover': {
            background: 'rgb(0, 0, 0, 0.5)',
            transform: 'scale(1.2)'
        }
    }
});

const MyTypography = withStyles({
    h5: {
        fontSize: '6em',
        fontFamily: '"Anton", sans-serif',
        color: 'rgb(254, 184, 28)',
        lineHeight: '1.8em'

    },
    subtitle1: {
        fontSize: '1em',
        fontFamily: '"Anton", sans-serif',
        whiteSpace: 'pre-line'
    }
})(Typography)

const tileData = [
    {
        img: require('../../images/WhatsApp Image 2018-12-03 at 15.35.02.jpeg'),
        title: 'WhatsApp Image 2018-12-03 at 15.35.02.jpeg',
        author: 'author',
        cols: 2,
        rows: 2
    }, {
        img: require('../../images/15.34.18 (1).jpeg'),
        title: '15.34.18 (1).jpeg',
        author: 'author',
        cols: 1,
        rows: 2
    },  {
        img: require('../../images/d5b93c1d-9271-416b-9477-ee48baf09232.jpg'),
        title: 'd5b93c1d-9271-416b-9477-ee48baf09232.jpg',
        author: 'author',
        cols: 2,
        rows: 2
    }
]

class PremiumClasses extends Component {

    state = {
        dialogOpen: false,
        img: undefined
    }

    handleDialog = (img) => {
        this.setState({dialogOpen: true, img});
    }

    handleClose = () => {
        this.setState({dialogOpen: false, img: undefined})
    }

    render() {

        const {classes} = this.props;
        const {dialogOpen, img} = this.state;

        return (
            <div className='group-premium-individual-classes'>
                <div className='enter-first left-spaced'>
                    <MyTypography variant='h5'>
                        {translate('threeDaysAWeek')}
                    </MyTypography>
                </div>
                <div className='enter-second'>
                    <MyTypography variant='h5'>
                        {translate('6Students')}
                    </MyTypography>
                </div>
                <div className='enter-third'>
                    <MyTypography variant='h5'>
                        {translate('400TLMonth')}
                    </MyTypography>
                </div>
                <GridList cellHeight={250} className={classes.gridList} cols={3} spacing={40}>
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
                                    <IconButton className={classes.icon} onClick={() => this.handleDialog(img)}>
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
                <Dialog
                    open={dialogOpen}
                    onClose={() => this.setState({dialogOpen: false, img: undefined})}
                    maxWidth={false}>
                    <img
                        src={img}
                        style={{
                        maxWidth: '90vw',
                        maxHeight: '80vh'
                    }}/>
                </Dialog>
            </div>
        )
    }
}

export default withStyles(styles)(PremiumClasses);