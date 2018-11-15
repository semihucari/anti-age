import React, {Component} from 'react'
import {withStyles} from '@material-ui/core/styles';
import {Typography, InputBase, TextField, Button} from '@material-ui/core';
import {fade} from '@material-ui/core/styles/colorManipulator';
import SearchIcon from '@material-ui/icons/Search';

const styles = theme => ({
    subscribeContainer: {
        margin: '4vh'
    },
    mailContainer: {
        textAlign: 'center',
        textTransform: 'uppercase',
        marginTop: '2vh'
    },
    buttonRoot: {}
});

class SubscribeMain extends Component {
    render() {

        const {classes} = this.props;

        return (
            <div className={classes.subscribeContainer}>
                <Typography variant="h6" align='center'>
                    HEMEN KAYIT OLUN İLK SİPARİŞİNİZDE %20 İNDİRİM FIRSATINI KAÇIRMAYIN!
                </Typography>
                <div className={classes.mailContainer}>
                    <TextField variant='outlined' placeholder='Email...'></TextField>
                </div>
                <div className={classes.mailContainer}>
                    <Button variant='contained' color="primary">Üye Ol</Button>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(SubscribeMain);