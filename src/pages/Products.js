import React, {Component} from 'react'
import {withStyles} from '@material-ui/core/styles';
import ProductCard from '../components/ProductCard';
import {Typography, Grow} from '@material-ui/core';

const styles = theme => ({
    productContainer: {
        textAlign: 'center'
    },
    groupClass: {
        textAlign: 'left',
        color: 'white',
        backgroundImage: `url(${require('../images/Martial-Arts-Class.jpg')})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    },
    title: {
        paddingLeft: '1vw'
    }
});

class Products extends Component {
    state = {
        groupLecturesShow: false
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
                    className={classes.groupClass}
                    id='groupLecturesShow'
                    mouseEnter={this.mouseEnter}
                    mouseLeave={this.mouseLeave}>
                    <Typography variant='h6' color='secondary' className={classes.title}>GRUP DERSLERİ</Typography>
                    <Grow in={groupLecturesShow}>
                        {groupLecturesShow
                            ? <div>
                                    <Typography variant='subtitle1' color='secondary' className={classes.title}>Haftada 4 gün</Typography>
                                    <Typography variant='subtitle1' color='secondary' className={classes.title}>15 - 20 kişilik sınıflarda</Typography>
                                    <Typography variant='subtitle1' color='secondary' className={classes.title}>Aylık 200₺</Typography>
                                </div>
                            : <div></div>}
                    </Grow>
                </ProductCard>
            </div>
        )
    }
}

export default withStyles(styles)(Products);