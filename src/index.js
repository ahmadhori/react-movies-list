import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Route, Switch } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.css";
import Movies from "./components/Movies";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./components/common/navBar";
import Customers from "./components/customers";
import Rentals from "./components/rentals";
import Main from "./components/main";

ReactDOM.render(
    <BrowserRouter>
        <NavBar />
        <div className="content">
            <Switch>
                <Route path="/movies" component={Movies} />
                <Route path="/customers" component={Customers} />
                <Route path="/rentals" component={Rentals} />
                <Route path="/" component={Main} />
            </Switch>
        </div>
    </BrowserRouter>,
    document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
