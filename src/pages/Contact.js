import React, {Component} from 'react'
import {withStyles} from '@material-ui/core/styles';
import MyMapComponent from '../components/Map';
import Hours from '../components/Hours';

const styles = theme => ({});

class Contact extends Component {
    render() {
        return (
            <div className='gym'>
                <MyMapComponent/>
                <Hours/>
            </div>
        )
    }
}

export default withStyles(styles)(Contact);