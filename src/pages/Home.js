import React, {Component} from 'react'
import {withStyles} from '@material-ui/core/styles';
import TopVideo from '../components/TopVideo';
import Swipes from '../components/Swipes';
import Footer from '../components/Footer';

const styles = theme => ({
});

class Main extends Component {
    render() {
        return (
            <div>
                <TopVideo/>
                <Swipes/>
                <Footer/>
            </div>
        )
    }
}

export default withStyles(styles)(Main);