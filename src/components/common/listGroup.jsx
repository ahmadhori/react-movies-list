import React, { Component } from "react";

class ListGroup extends Component {
    state = {};

    render() {
        return (
            <ul className="list-group">
                {this.props.items.map(x => (
                    <li
                        className={x === this.props.selectedItem ? "list-group-item list-group-item-action active" : "list-group-item list-group-item-action"}
                        key={x[this.props.idProperty]}
                        onClick={() => this.props.onClick(x)}>
                        {x[this.props.textProperty]}
                    </li>
                ))}
            </ul>
        );
    }
}

export default ListGroup;
