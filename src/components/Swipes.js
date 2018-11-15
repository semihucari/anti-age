import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import {autoPlay} from 'react-swipeable-views-utils';
import Pagination from './Pagination';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
const styles = {
    root: {
        position: 'relative',
    },
    slide: {
        overflow: 'hidden',
        padding: 0,
        color: '#fff'
    }
};

class Swipes extends React.Component {
    state = {
        index: 0
    };

    handleChangeIndex = index => {
        this.setState({index});
    };

    render() {
        const {index} = this.state;

        return (
            <div
                style={{
                width: '100vw',
                textAlign: '-webkit-center'
            }}>
                <div style={styles.root}>
                    <AutoPlaySwipeableViews index={index} onChangeIndex={this.handleChangeIndex} interval={3000}>
                        <div style={styles.slide}>
                            <img src={require('../images/img0.jpg')} className='img'/>
                        </div>
                        <div style={styles.slide}>
                            <img src={require('../images/img1.jpg')} className='img'/>
                        </div>
                        <div style={styles.slide}>
                            <img src={require('../images/img2.jpg')} className='img'/>
                        </div>
                    </AutoPlaySwipeableViews>
                    <Pagination dots={3} selectedDot={index} onChangeIndex={this.handleChangeIndex}/>
                </div>
            </div>
        );
    }
}

export default Swipes;