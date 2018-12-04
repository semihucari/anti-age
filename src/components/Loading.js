import React, {Component} from 'react'
import {withStyles} from '@material-ui/core/styles';
import {LocEn, LocTr} from '../localization/translation';

const translate = (key) => {
    const lang = localStorage.getItem('lang');
    return lang === 'tr'
        ? LocTr(key)
        : LocEn(key);
}

const styles = theme => ({
});

class Loading extends Component {
    render() {

        const {classes} = this.props;

        return (
            <div>
                {translate('loading')}
            </div>
        )
    }
}

export default withStyles(styles)(Loading);