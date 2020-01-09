import React, { Component } from "react";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            account: { username: "", password: "" }
        };
    }

    handleSubmit = event => {
        event.preventDefault();
        alert("Submitted: " + this.state.account.username + " , " + this.state.account.password);
    };

    handleChange = event => {
        console.log(event.target.value);
        const account = this.state.account;
        account[event.target.name] = event.target.value;
        this.setState({ account });
    };

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input
                            type="email"
                            className="form-control"
                            id="exampleInputEmail1"
                            placeholder="Enter email"
                            name="username"
                            value={this.state.username}
                            onChange={this.handleChange}
                        />
                        <small id="emailHelp" className="form-text text-muted">
                            We'll never share your email with anyone else.
                        </small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            id="exampleInputPassword1"
                            name="password"
                            placeholder="Password"
                            value={this.state.password}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1">
                            Check me out
                        </label>
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </form>
            </div>
        );
    }
}

export default Login;
