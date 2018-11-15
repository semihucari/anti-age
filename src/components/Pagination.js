import React, {Component} from 'react'

let elements = [];

export default class Pagination extends Component {

    createDots = (number, selected) => {
        elements = [];

        for (let index = 0; index < number; index++) {
            elements.push(
                <span className={selected === index ? "selected-dot":"dot"} id={index} key={index} onClick={() => this.props.onChangeIndex(index)}/>
            );
        }
    }

    render() {

        this.createDots(this.props.dots, this.props.selectedDot);

        return (
            <div style={{textAlign: 'center'}}>
                {elements}
            </div>
        )
    }
}
