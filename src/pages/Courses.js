import React, {Component} from 'react'
import {withStyles} from '@material-ui/core/styles';
import ProductCard from '../components/ProductCard';
import {Typography, Grow} from '@material-ui/core';

const styles = theme => ({
    productContainer: {
        textAlign: 'center',
        marginTop: '8em',
        width: '100vw'
    },
    muayThai: {
        textAlign: 'left',
        color: 'white',
        backgroundImage: `url(${require('../images/muay-thai.jpg')})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        transition: 'all .25s ease'
    },
    kickBox: {
        textAlign: 'left',
        color: 'white',
        backgroundImage: `url(${require('../images/kick-box.jpg')})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        transition: 'all .25s ease'
    },
    box: {
        textAlign: 'left',
        color: 'white',
        backgroundImage: `url(${require('../images/box.jpg')})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        transition: 'all .25s ease'
    },
    taek: {
        textAlign: 'left',
        color: 'white',
        backgroundImage: `url(${require('../images/taek.jpg')})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        transition: 'all .25s ease'
    },
    wushu: {
        textAlign: 'left',
        color: 'white',
        backgroundImage: `url(${require('../images/wushu.jpg')})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        transition: 'all .25s ease'
    },
    mma: {
        textAlign: 'left',
        color: 'white',
        backgroundImage: `url(${require('../images/mma.jpg')})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        transition: 'all .25s ease'
    },
    title: {
        paddingLeft: '1vw',
        height: '2em',
        marginBottom: '0.5vh'
    },
    h6: {
        fontSize: '1.9em',
        fontFamily: '"Anton", cursive',
        color: 'yellow'
    },
    subtitle1: {
        fontFamily: '"Anton", cursive',
        fontSize: '1.2em',
        background: 'red',
        textAlign: 'left',
        paddingLeft: '0.6em',
        '&:hover': {
            background: 'rgb(254, 184, 28)'
        }
    },
    subtitle: {
        height: '3.2em',
        width: '30%',
        marginBottom: '0.5vh',
        clipPath: 'polygon(86% 0%, 100% 50%, 86% 100%, 0% 100%, 0 50%, 0% 0%)',
        paddingTop: '0.85em',
        float: 'right'
    }
});

class Courses extends Component {
    state = {
        groupLecturesShow: false,
        premiumLecturesShow: false,
        specialLecturesShow: false
    };

    mouseEnter = (name) => {
        this.setState({[name]: true})
    }

    mouseLeave = (name) => {
        this.setState({[name]: false})
    }

    render() {

        const {classes} = this.props;
        const {groupLecturesShow} = this.state;

        return (
            <div className={classes.productContainer}>
                <ProductCard
                    className={classes.muayThai}
                    id='groupLecturesShow'
                    mouseEnter={this.mouseEnter}
                    mouseLeave={this.mouseLeave}>
                    <Typography
                        variant='h6'
                        color='secondary'
                        className={classes.title}
                        noWrap
                        classes={{
                        h6: classes.h6
                    }}>MUAY THAI</Typography>
                    <Grow in={groupLecturesShow}>
                        {groupLecturesShow
                            ? <div>
                                    <Typography
                                        variant='subtitle1'
                                        color='secondary'
                                        className={classes.subtitle}
                                        classes={{
                                        subtitle1: classes.subtitle1
                                    }}>DETAYLI BİLGİ
                                    </Typography>
                                </div>
                            : <div></div>}
                    </Grow>
                </ProductCard>
                <ProductCard
                    className={classes.kickBox}
                    id='groupLecturesShow'
                    mouseEnter={this.mouseEnter}
                    mouseLeave={this.mouseLeave}>
                    <Typography
                        variant='h6'
                        color='secondary'
                        className={classes.title}
                        noWrap
                        classes={{
                        h6: classes.h6
                    }}>KICK BOX</Typography>
                    <Grow in={groupLecturesShow}>
                        {groupLecturesShow
                            ? <div>
                                    <Typography
                                        variant='subtitle1'
                                        color='secondary'
                                        className={classes.subtitle}
                                        classes={{
                                        subtitle1: classes.subtitle1
                                    }}>DETAYLI BİLGİ
                                    </Typography>
                                </div>
                            : <div></div>}
                    </Grow>
                </ProductCard>
                <ProductCard
                    className={classes.box}
                    id='groupLecturesShow'
                    mouseEnter={this.mouseEnter}
                    mouseLeave={this.mouseLeave}>
                    <Typography
                        variant='h6'
                        color='secondary'
                        className={classes.title}
                        noWrap
                        classes={{
                        h6: classes.h6
                    }}>BOKS</Typography>
                    <Grow in={groupLecturesShow}>
                        {groupLecturesShow
                            ? <div>
                                    <Typography
                                        variant='subtitle1'
                                        color='secondary'
                                        className={classes.subtitle}
                                        classes={{
                                        subtitle1: classes.subtitle1
                                    }}>DETAYLI BİLGİ
                                    </Typography>
                                </div>
                            : <div></div>}
                    </Grow>
                </ProductCard>
                <ProductCard
                    className={classes.taek}
                    id='groupLecturesShow'
                    mouseEnter={this.mouseEnter}
                    mouseLeave={this.mouseLeave}>
                    <Typography
                        variant='h6'
                        color='secondary'
                        className={classes.title}
                        noWrap
                        classes={{
                        h6: classes.h6
                    }}>TAEKWONDO</Typography>
                    <Grow in={groupLecturesShow}>
                        {groupLecturesShow
                            ? <div>
                                    <Typography
                                        variant='subtitle1'
                                        color='secondary'
                                        className={classes.subtitle}
                                        classes={{
                                        subtitle1: classes.subtitle1
                                    }}>DETAYLI BİLGİ
                                    </Typography>
                                </div>
                            : <div></div>}
                    </Grow>
                </ProductCard>
                <ProductCard
                    className={classes.wushu}
                    id='groupLecturesShow'
                    mouseEnter={this.mouseEnter}
                    mouseLeave={this.mouseLeave}>
                    <Typography
                        variant='h6'
                        color='secondary'
                        className={classes.title}
                        noWrap
                        classes={{
                        h6: classes.h6
                    }}>WUSHU</Typography>
                    <Grow in={groupLecturesShow}>
                        {groupLecturesShow
                            ? <div>
                                    <Typography
                                        variant='subtitle1'
                                        color='secondary'
                                        className={classes.subtitle}
                                        classes={{
                                        subtitle1: classes.subtitle1
                                    }}>DETAYLI BİLGİ
                                    </Typography>
                                </div>
                            : <div></div>}
                    </Grow>
                </ProductCard>
                <ProductCard
                    className={classes.mma}
                    id='groupLecturesShow'
                    mouseEnter={this.mouseEnter}
                    mouseLeave={this.mouseLeave}>
                    <Typography
                        variant='h6'
                        color='secondary'
                        className={classes.title}
                        noWrap
                        classes={{
                        h6: classes.h6
                    }}>MMA</Typography>
                    <Grow in={groupLecturesShow}>
                        {groupLecturesShow
                            ? <div>
                                    <Typography
                                        variant='subtitle1'
                                        color='secondary'
                                        className={classes.subtitle}
                                        classes={{
                                        subtitle1: classes.subtitle1
                                    }}>DETAYLI BİLGİ
                                    </Typography>
                                </div>
                            : <div></div>}
                    </Grow>
                </ProductCard>
            </div>
        )
    }
}

export default withStyles(styles)(Courses);