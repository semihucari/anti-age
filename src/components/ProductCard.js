import React, {Component} from 'react'
import {withStyles} from '@material-ui/core';

const styles = theme => ({
    CardContainer: {
        display: 'inline-flex',
        width: '26vw',
        height: '70vh',
        margin: '2vh',
        borderRadius: '3px'
    },
    titleContainer: {
        height: '20vh',
        width: '26vw',
        background: '-webkit-gradient(linear, left top, left bottom, color-stop(0%,rgba(0,0,0,0.4' +
                ')), color-stop(100%,rgba(0,0,0,1)))',
        position: 'absolute',
        bottom: '0',
        transform: 'translate(0, -12vh)',
        borderRadius: '3px'
    },
    titleShrink: {
        height: '8vh',
        width: '26vw',
        background: '-webkit-gradient(linear, left top, left bottom, color-stop(0%,rgba(137,255,241,0' +
                ')), color-stop(100%,rgba(0,0,0,1)))',
        position: 'absolute',
        bottom: '0',
        transform: 'translate(0, -12vh)',
        borderRadius: '3px'
    }
});

class ProductCard extends Component {

    state = {
        hover: false
    }
    render() {

        const {classes, mouseEnter, mouseLeave, id} = this.props;
        const {hover} = this.state;
        
        const items = this.props.children;

        return (
            <div
                className={this.props.className + ' ' + classes.CardContainer}
                onMouseEnter={() => {
                this.setState({hover: true});
                mouseEnter(id)
            }}
                onMouseLeave={() => {
                this.setState({hover: false});
                mouseLeave(id)
            }}>
                <div className={hover ? classes.titleContainer:classes.titleShrink}>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(ProductCard)
