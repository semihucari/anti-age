import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import {autoPlay} from 'react-swipeable-views-utils';
import Pagination from './Pagination';
import {withStyles} from '@material-ui/core/styles';
import {Typography} from '@material-ui/core';
import {LocEn, LocTr} from '../localization/translation';

const translate = (key) => {
    const lang = localStorage.getItem('lang');
    return lang === 'tr'
        ? LocTr(key)
        : LocEn(key);
}

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
const styles = {
    root: {
        position: 'relative'
    },
    slide: {
        overflow: 'hidden',
        padding: 0,
        color: '#fff',
        position: 'relative'
    },
    textTopRight: {
        position: 'absolute',
        top: '50%',
        right: '50%',
        fontFamily: '"Amatic SC", cursive',
        fontSize: ''
    }
};

const MyTypography = withStyles({
    h5: {
        fontSize: '4.3em',
        fontFamily: '"Anton", sans-serif',
        position: 'absolute',
        color: '#feb81c',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
    }
})(Typography)

class Swipes extends React.Component {
    state = {
        index: 0
    };

    handleChangeIndex = index => {
        this.setState({index});
    };

    render() {
        const {classes} = this.props;
        const {index} = this.state;

        return (
            <div
                style={{
                width: '70vw',
                height: '100vh',
                textAlign: '-webkit-center',
                paddingTop: '6vw',
                textTransform: 'uppercase'
            }}>
                <div style={styles.root}>
                    <AutoPlaySwipeableViews
                        index={index}
                        onChangeIndex={this.handleChangeIndex}
                        interval={4000}>
                        <div style={styles.slide}>
                            <img
                                src={require('../images/WhatsApp Image 2018-12-03 at 15.44.16.jpeg')}
                                className='img'/>
                            <MyTypography variant='h5'>{translate('kids')}</MyTypography>
                        </div>
                        <div style={styles.slide}>
                            <img src={require('../images/img1.jpg')} className='img'/>
                            <MyTypography variant='h5'>{translate('muayThai')}</MyTypography>
                        </div>
                        <div style={styles.slide}>
                            <img src={require('../images/personal-training.jpg')} className='img'/>
                            <MyTypography variant='h5'>{translate('personalTraining')}</MyTypography>
                        </div>
                        <div style={styles.slide}>
                            <img src={require('../images/taek-swipe.jpg')} className='img'/>
                            <MyTypography variant='h5'>{translate('taek')}</MyTypography>
                        </div>
                        <div style={styles.slide}>
                            <img src={require('../images/boxing-swipe.jpg')} className='img'/>
                            <MyTypography variant='h5'>{translate('boxing')}</MyTypography>
                        </div>
                        <div style={styles.slide}>
                            <img src={require('../images/func-fit.png')} className='img'/>
                            <MyTypography variant='h5'>{translate('functionalFitness')}</MyTypography>
                        </div>
                        <div style={styles.slide}>
                            <img src={require('../images/cardio.jpg')} className='img'/>
                            <MyTypography variant='h5'>{translate('CARDIO')}</MyTypography>
                        </div>
                        <div style={styles.slide}>
                            <img src={require('../images/mma-swipe.jpg')} className='img'/>
                            <MyTypography variant='h5'>{translate('mma')}</MyTypography>
                        </div>
                        <div style={styles.slide}>
                            <img src={require('../images/kb.jpg')} className='img'/>
                            <MyTypography variant='h5'>{translate('kickboxing')}</MyTypography>
                        </div>
                        <div style={styles.slide}>
                            <img src={require('../images/wushu-swipe.jpg')} className='img'/>
                            <MyTypography variant='h5'>{translate('wushu')}</MyTypography>
                        </div>
                    </AutoPlaySwipeableViews>
                    <Pagination
                        dots={10}
                        selectedDot={index}
                        onChangeIndex={this.handleChangeIndex}/>
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(Swipes);