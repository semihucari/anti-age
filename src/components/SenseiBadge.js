import React, {Component} from 'react'
import {withStyles} from '@material-ui/core/styles';
import {Typography} from '@material-ui/core';

const styles = theme => ({});

const MyTypography = withStyles({
    h4: {
        fontSize: '3em',
        fontFamily: '"Anton", sans-serif',
        color: 'rgb(254, 184, 28)'
    },
    h5: {
        fontSize: '1.9em',
        fontFamily: '"Anton", sans-serif',
        color: 'rgb(254, 184, 28)'
    }
})(Typography);

class SenseiBadge extends Component {
    render() {

        const {classes} = this.props;

        return (
            <div>
                
            </div>
        )
    }
}

export default withStyles(styles)(SenseiBadge);