import React, {Component} from 'react'
import {withStyles} from '@material-ui/core';

const styles = theme => ({
    parentContainer: {
        display: 'inline-flex',
        margin: '2vh',
        borderRadius: '3px',
        position: 'relative',
        cursor: 'pointer',
        '&:hover .class-info': {
            height: '10em',
            background: 'black'
        }
    },
    firstChildContainer: {
        width: '100%',
        height: '100%',
        zIndex: '1000'
    },
    firstChildContainerHover: {
        width: '100%',
        height: '100%',
        filter: 'blur(3px)',
        zIndex: '1000'
    },
    secondChildContainer: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: '0',
        zIndex: '1001'
    },
    titleContainer: {
        height: '20vh',
        width: '26vw',
        background: '-webkit-gradient(linear, left top, left bottom, color-stop(0%,rgba(0,0,0,0.4)), ' +
                'color-stop(100%,rgba(0,0,0,1)))',
        position: 'absolute',
        bottom: '-1px',
        // transform: 'translate(0, -12vh)',
        borderRadius: '3px',
        overflow: 'hidden'
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
                className={classes.parentContainer + ' card-container'}
                onMouseEnter={() => {
                this.setState({hover: true});
                mouseEnter(id)
            }}
                onMouseLeave={() => {
                this.setState({hover: false});
                mouseLeave(id)
            }}>
                <div
                    className={this.props.className + ' ' + (hover
                    ? classes.firstChildContainerHover
                    : classes.firstChildContainer)}></div>
                <div className={classes.secondChildContainer}>
                    <div
                        className='class-info'>
                        {this.props.children}</div>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(ProductCard)