import React, {Component} from 'react'
import {withStyles} from '@material-ui/core/styles';
import Swipes from '../components/Swipes';
import Footer from '../components/Footer';
import SubscribeMain from '../components/SubscribeMain';
import { Spring } from 'react-spring'
const styles = theme => ({});

class Main extends Component {
    render() {
        return (
            <div>
                <Swipes/>
                <SubscribeMain/>
                <Footer/>
            </div>
        )
    }
}

export default withStyles(styles)(Main);