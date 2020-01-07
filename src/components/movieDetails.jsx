import React, { Component } from "react";

class MovieDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return <h1>MovieDetails Component for movie id {this.props.match.params.id}</h1>;
    }
}

export default MovieDetails;
