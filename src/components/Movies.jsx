import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import { genres } from "../services/fakeGenreService";
class Movies extends Component {
  state = {};
  constructor(props) {
    super(props);
    this.state = {
      data: getMovies(),
      genres: genres
    };
  }
  render() {
    return (
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
          {this.state.data.map(x => (
            <tr>
              <td>{x.title}</td>
              <td>{x.genre.name}</td>
              <td>{x.numberInStock}</td>
              <td>{x.dailyRentalRate}</td>
              <td>
                <button className="btn btn-danger">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }

  componentDidMount = () => {
    console.log(this.state);
  };
}

export default Movies;
