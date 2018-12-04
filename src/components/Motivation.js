import React, {Component} from 'react'
import {withStyles} from '@material-ui/core/styles';
import {LocEn, LocTr} from '../localization/translation';
import { Typography } from '@material-ui/core';

const translate = (key) => {
    const lang = localStorage.getItem('lang');
    return lang === 'tr'
        ? LocTr(key)
        : LocEn(key);
}

const styles = theme => ({
});

const MyTypography = withStyles({
    h5: {
        fontSize: '2.3em',
        fontFamily: '"Anton", sans-serif',
        color: 'white'
    },
    h6: {
        fontSize: '1.8em',
        fontFamily: '"Anton", sans-serif',
        color: '#feb81c',
        textAlign: 'right'
    }
})(Typography)

class Motivation extends Component {
    render() {

        const {classes} = this.props;

        return (
            <div>
                <MyTypography variant='h5'>
                    {translate('bruceLee')}
                </MyTypography>
                <MyTypography variant='h6'>
                    Bruce Lee
                </MyTypography>
            </div>
        )
    }
}

export default withStyles(styles)(Motivation);