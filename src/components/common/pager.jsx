import React from "react";
import _ from "lodash";
import PropTypes from "prop-types";

const Pager = props => {
    const numOfPages = Math.ceil(props.numofItems / props.pageSize);

    const p = _.range(1, numOfPages + 1);

    return (
        <nav aria-label="Page navigation example" className="m-3">
            <ul className="pagination">
                {p.map(x => (
                    <li className={x !== props.currPage ? "page-item" : "page-item active"} key={x} onClick={() => props.onClick(x)}>
                        <button className="page-link">{x}</button>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

Pager.propTypes = {
    // You can declare that a prop is a specific JS primitive. By default, these
    // are all optional.
    numofItems: PropTypes.number.isRequired,
    pageSize: PropTypes.number.isRequired,
    currPage: PropTypes.number.isRequired
};

export default Pager;
