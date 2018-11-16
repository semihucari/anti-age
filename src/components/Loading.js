import React, {Component} from 'react'
import {withStyles} from '@material-ui/core/styles';

const styles = theme => ({
});

class Loading extends Component {
    render() {

        const {classes} = this.props;

        return (
            <div>
                YÜKLENİYOR....
            </div>
        )
    }
}

export default withStyles(styles)(Loading);