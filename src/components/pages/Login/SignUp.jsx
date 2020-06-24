import React, { Component } from "react";
import "../Login/SignUp.css";
var APICall = require("../../../congfiguration/CallAPI");
class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: null,
      lastName: null,
      email: null,
      password: null,
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    var userInfo = {
      NAME: this.state.firstName,
      LASTNAME: this.state.lastName,
      EMAIL: this.state.email,
      PASSWORD: this.state.password,
    };
    APICall.UserDetails(userInfo).then((res) => {
      this.props.history.push({
        pathname: "/login",
      });
    });
  };

  handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };
    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  };

  GoToLogin = () => {
    this.props.history.push({
      pathname: "/login",
    });
  };

  render() {
    return (
      <div className="wrapper">
        <div className="form-wrapper">
          <h1>Create Account</h1>
          <form onSubmit={this.handleSubmit} noValidate>
            <div className="firstName">
              <label htmlFor="firstName">First Name</label>
              <input
                placeholder="First Name"
                type="text"
                name="firstName"
                onChange={this.handleChange}
              />
            </div>
            <div className="lastName">
              <label htmlFor="lastName">Last Name</label>
              <input
                placeholder="Last Name"
                type="text"
                name="lastName"
                onChange={this.handleChange}
              />
            </div>
            <div className="email">
              <label htmlFor="email">Email</label>
              <input
                placeholder="Email"
                type="email"
                name="email"
                onChange={this.handleChange}
              />
            </div>
            <div className="password">
              <label htmlFor="password">Password</label>
              <input
                placeholder="Password"
                type="password"
                name="password"
                onChange={this.handleChange}
              />
            </div>
            <div className="createAccount">
              <button type="submit">Create Account</button>
              <button type="submit" onClick={this.GoToLogin}>
                Go To Login
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default SignUp;
