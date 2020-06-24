import React, { Component } from "react";
import "../Login/SignUp.css";
var APICall = require("../../../congfiguration/CallAPI");
class DeletePost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    var userInfo = {
      EMAIL: this.state.email,
    };
    APICall.DeletePost(userInfo).then((res) => {
      this.props.history.push({
        pathname: "/AllBlog",
      });
    });
  };

  handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };
    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  };

  render() {
    return (
      <div className="wrapper">
        <div className="form-wrapper">
          <h2>For Verification Purposes</h2>
          <form onSubmit={this.handleSubmit}>
            <div className="password">
              <label htmlFor="password">Enter Email</label>
              <input
                placeholder="Enter Your Email"
                type="text"
                name="email"
                onChange={this.handleChange}
              />
            </div>
            <div className="createAccount">
              <button type="submit">Delete</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default DeletePost;
