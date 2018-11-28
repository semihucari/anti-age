import React, {Component} from 'react'
import {withStyles} from '@material-ui/core/styles';
import TopVideo from '../components/TopVideo';
import Swipes from '../components/Swipes';
import Footer from '../components/Footer';
import Banner from '../components/Banner';

const styles = theme => ({
});

class Main extends Component {
    render() {
        return (
            <div className='home'>
                <TopVideo/>
                <Banner/>
                <Swipes/>
                <Footer/>
            </div>
        )
    }
}

export default withStyles(styles)(Main);