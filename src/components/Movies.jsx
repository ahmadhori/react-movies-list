import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import Pager from "./common/pager";
import { getCurrPageData } from "../utils/pager";
import ListGroup from "./common/listGroup";
import _ from "lodash";
import { Link } from "react-router-dom";

class Movies extends Component {
    state = {};
    constructor(props) {
        super(props);
        this.state = {
            movies: [],
            genres: [],
            currentPage: 1,
            pageLength: 3
        };
        console.log("Movies Constructor");
    }

    componentDidMount() {
        this.setState({
            movies: getMovies(),
            genres: [{ name: "All Genre", _id: "" }, ...getGenres()]
        });
    }

    handleDeleteClick = id => {
        var filtered = this.state.movies.filter(function(el) {
            return el._id !== id;
        });
        this.setState({
            movies: filtered
        });
    };

    handleItemSelect = item => {
        this.setState({ selectedGenre: item, currentPage: 1 });
    };

    handlePagerClick = id => {
        this.setState({
            currentPage: id
        });
    };

    render() {
        console.log("this.state.movies", this.state.movies);
        var currPageMovies;
        var filteredByGenre;
        if (this.state.selectedGenre != null && this.state.selectedGenre._id) {
            filteredByGenre = this.state.movies.filter(x => _.isEqual(x.genre, this.state.selectedGenre));
        } else {
            filteredByGenre = this.state.movies;
        }

        currPageMovies = getCurrPageData(filteredByGenre, this.state.currentPage, this.state.pageLength);
        console.log("currPageMovies", currPageMovies);

        return (
            <React.Fragment>
                <div className="container">
                    {this.renderHeader()}
                    <div className="row">
                        <div className="col-md-3">
                            <ListGroup
                                items={this.state.genres}
                                selectedItem={this.state.selectedGenre}
                                idProperty="_id"
                                textProperty="name"
                                onClick={this.handleItemSelect}
                            />
                        </div>
                        <div className="col-md-9">
                            <div className="row">
                                <table className="table">
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
                                        {currPageMovies.map(x => (
                                            <tr key={x._id}>
                                                <td>
                                                    <Link to={"movies/" + x._id}>{x.title}</Link>
                                                </td>
                                                <td>{x.genre.name}</td>
                                                <td>{x.numberInStock}</td>
                                                <td>{x.dailyRentalRate}</td>
                                                <td>
                                                    <button className="btn btn-danger" onClick={() => this.handleDeleteClick(x._id)}>
                                                        Delete
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <div className="row">
                                <div className="col d-flex justify-content-center">
                                    <Pager
                                        numofItems={filteredByGenre.length}
                                        pageSize={this.state.pageLength}
                                        currPage={this.state.currentPage}
                                        onClick={this.handlePagerClick}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }

    renderHeader() {
        if (this.state.movies.length === 0) {
            return <h3 className="m-3">There are no movies in our database</h3>;
        } else {
            return <h3 className="m-3">There are total {this.state.movies.length} movies in our database</h3>;
        }
    }
}

export default Movies;
