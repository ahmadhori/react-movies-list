import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Route, Switch, Redirect } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.css";
import Movies from "./components/Movies";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./components/common/navBar";
import Customers from "./components/customers";
import Rentals from "./components/rentals";
import Main from "./components/home";
import MovieDetails from "./components/movieDetails";
import NotFound from "./components/notFound";
import Login from "./components/login";

ReactDOM.render(
    <BrowserRouter>
        <NavBar />
        <main className="container">
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/movies/:id/:name?" component={MovieDetails} />
                <Route path="/movies" component={Movies} />
                <Route path="/customers" component={Customers} />} />
                <Route path="/rentals" render={props => <Rentals sortBy="name" {...props} />} />
                <Route path="/" exact component={Main} />
                <Route path="/not-found" component={NotFound} />
                <Redirect to="/not-found" component={Main} />
            </Switch>
        </main>
    </BrowserRouter>,
    document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
