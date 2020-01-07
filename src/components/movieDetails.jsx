import React, { Component } from "react";

class MovieDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <h1>
                MovieDetails Component for movie <br />
                id: {this.props.match.params.id}
                <br />
                name: {this.props.match.params.name}
            </h1>
        );
    }
}

export default MovieDetails;
