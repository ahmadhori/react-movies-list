import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import { genres } from "../services/fakeGenreService";
import Pager from "./common/pager";

class Movies extends Component {
    state = {};
    constructor(props) {
        super(props);
        this.state = {
            data: getMovies(),
            currentPage: 1,
            pageLength: 4
        };
    }

    handleClick = id => {
        var filtered = this.state.data.filter(function(el) {
            return el._id !== id;
        });
        this.setState({
            data: filtered
        });
    };

    render() {
        return (
            <React.Fragment>
                {this.renderHeader()}
                <table className="table m-3">
                    <thead>
                        <tr>
                            <th scope="col">Title</th>
                            <th scope="col">Genre</th>
                            <th scope="col">Stock</th>
                            <th scope="col">Rate</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.data.map(x => (
                            <tr key={x._id}>
                                <td>{x.title}</td>
                                <td>{x.genre.name}</td>
                                <td>{x.numberInStock}</td>
                                <td>{x.dailyRentalRate}</td>
                                <td>
                                    <button className="btn btn-danger" onClick={() => this.handleClick(x._id)}>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <Pager numofItems="13" pageSize="4" currPage="2" />
            </React.Fragment>
        );
    }

    componentDidMount = () => {
        console.log(this.state);
    };

    renderHeader() {
        if (this.state.data.length === 0) {
            return <h3 className="m-3">There is no movies in our database</h3>;
        } else {
            return <h3 className="m-3">There is {this.state.data.length} movies in our database</h3>;
        }
    }
}

export default Movies;
