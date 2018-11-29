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
    groupClass: {
        textAlign: 'left',
        color: 'white',
        backgroundImage: `url(${require('../images/Martial-Arts-Class.jpg')})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        transition: 'all .25s ease'
    },
    premiumClass: {
        textAlign: 'left',
        color: 'white',
        backgroundImage: `url(${require('../images/premium-class.jpg')})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        transition: 'all .25s ease'
    },
    specialClass: {
        textAlign: 'left',
        color: 'white',
        backgroundImage: `url(${require('../images/special-class.jpg')})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        transition: 'all .25s ease'
    },
    title: {
        paddingLeft: '1vw',
        height: '2em',
        marginBottom: '0.5vh'
    },
    h6: {
        fontSize: '1.9em',
        fontFamily: '"Anton", sans-serif',
        color: 'yellow'
    },
    subtitle1: {
        fontFamily: '"Anton", sans-serif',
        fontSize: '1.2em'
    },
    subtitle: {
        paddingLeft: '0.5em',
        height: '1.4em',
        marginBottom: '0.1em'
    },
});

class Products extends Component {
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
        const {groupLecturesShow, premiumLecturesShow, specialLecturesShow} = this.state;

        return (
            <div className={classes.productContainer}>
                <ProductCard
                    className={classes.groupClass}
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
                    }}>GRUP DERSLERİ</Typography>
                    <Grow in={groupLecturesShow}>
                        {groupLecturesShow
                            ? <div>
                                    <Typography
                                        variant='subtitle1'
                                        color='secondary'
                                        className={classes.subtitle}
                                        classes={{
                                        subtitle1: classes.subtitle1
                                    }}>Haftada 4 gün</Typography>
                                    <Typography
                                        variant='subtitle1'
                                        color='secondary'
                                        className={classes.subtitle}
                                        classes={{
                                        subtitle1: classes.subtitle1
                                    }}>15 - 20 kişilik sınıflarda</Typography>
                                    <Typography
                                        variant='subtitle1'
                                        color='secondary'
                                        className={classes.subtitle}
                                        classes={{
                                        subtitle1: classes.subtitle1
                                    }}>Aylık 200₺</Typography>
                                </div>
                            : <div></div>}
                    </Grow>
                </ProductCard>
                <ProductCard
                    className={classes.premiumClass}
                    id='premiumLecturesShow'
                    mouseEnter={this.mouseEnter}
                    mouseLeave={this.mouseLeave}>
                    <Typography
                        variant='h6'
                        color='secondary'
                        className={classes.title}
                        noWrap
                        classes={{
                        h6: classes.h6
                    }}>8 KİŞİLİK ÖZEL DERSLER</Typography>
                    <Grow in={premiumLecturesShow}>
                        {premiumLecturesShow
                            ? <div>
                                    <Typography
                                        variant='subtitle1'
                                        color='secondary'
                                        className={classes.subtitle}
                                        classes={{
                                        subtitle1: classes.subtitle1
                                    }}>Haftada 4 gün</Typography>
                                    <Typography
                                        variant='subtitle1'
                                        color='secondary'
                                        className={classes.subtitle}
                                        classes={{
                                        subtitle1: classes.subtitle1
                                    }}>8 kişilik sınıflarda</Typography>
                                    <Typography
                                        variant='subtitle1'
                                        color='secondary'
                                        className={classes.subtitle}
                                        classes={{
                                        subtitle1: classes.subtitle1
                                    }}>Aylık 400₺</Typography>
                                </div>
                            : <div></div>}
                    </Grow>
                </ProductCard>
                <ProductCard
                    className={classes.specialClass}
                    id='specialLecturesShow'
                    mouseEnter={this.mouseEnter}
                    mouseLeave={this.mouseLeave}>
                    <Typography
                        variant='h6'
                        color='secondary'
                        className={classes.title}
                        noWrap
                        classes={{
                        h6: classes.h6
                    }}>TEK KİŞİLİK ÖZEL DERSLER</Typography>
                    <Grow in={specialLecturesShow}>
                        {specialLecturesShow
                            ? <div>
                                    <Typography
                                        variant='subtitle1'
                                        color='secondary'
                                        className={classes.subtitle}
                                        classes={{
                                        subtitle1: classes.subtitle1
                                    }}>Seçtiğiniz günlerde</Typography>
                                    <Typography
                                        variant='subtitle1'
                                        color='secondary'
                                        className={classes.subtitle}
                                        classes={{
                                        subtitle1: classes.subtitle1
                                    }}>Ömer Hoca ile</Typography>
                                    <Typography
                                        variant='subtitle1'
                                        color='secondary'
                                        className={classes.subtitle}
                                        classes={{
                                        subtitle1: classes.subtitle1
                                    }}>Ders başına 100₺</Typography>
                                </div>
                            : <div></div>}
                    </Grow>
                </ProductCard>
            </div>
        )
    }
}

export default withStyles(styles)(Products);