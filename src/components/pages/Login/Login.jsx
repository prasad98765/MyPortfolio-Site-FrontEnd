import React, { Component } from "react";
import "../Login/SignUp.css";
var APICall = require("../../../congfiguration/CallAPI");
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      email: null,
      password: null,
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    var userInfo = {
      EMAIL: this.state.email,
      PASSWORD: this.state.password,
    };
    APICall.login(userInfo).then((res) => {
      if (res.data.data === true) {
        var obj = {
          name: this.state.name,
          email: this.state.email,
        };
        this.props.history.push({
          pathname: "/postBlog",
          state: { obj },
        });
      } else {
      }
    });
  };

  handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };
    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  };

  CreateAccount = () => {
    this.props.history.push({
      pathname: "/signup",
    });
  };

  render() {
    return (
      <div className="wrapper">
        <div className="form-wrapper">
          <h1>Login Your Account</h1>
          <form onSubmit={this.handleSubmit}>
            <div className="password">
              <label htmlFor="password">Name</label>
              <input
                placeholder="Enter Your Nink Name"
                type="text"
                name="name"
                onChange={this.handleChange}
              />
            </div>
            <div className="email">
              <label htmlFor="email">Email</label>
              <input
                placeholder="Email"
                type="text"
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
              <button type="submit">Login</button>
              <button type="submit" onClick={this.CreateAccount}>
                Create Account
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
