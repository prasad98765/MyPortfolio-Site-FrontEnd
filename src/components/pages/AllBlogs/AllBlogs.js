import React, { Component } from "react";
import "../Login/SignUp.css";

var APICall = require("../../../congfiguration/CallAPI");

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ALlBlogs: [],
      curTime: "",
    };
  }
  GoToLogin = () => {
    this.props.history.push({ pathname: "/login" });
  };
  GoToEdit = () => {
    this.props.history.push({ pathname: "/editPost" });
  };
  GoToDelete = () => {
    this.props.history.push({ pathname: "/deletePost" });
  };
  GoToHome = () => {
    this.props.history.push({ pathname: "/" });
  };
  componentWillMount = () => {
    APICall.getALlBlogs().then((res) => {
      this.setState({ ALlBlogs: res.data.data });
    });
    setInterval(() => {
      this.setState({
        curTime: new Date().toLocaleString(),
      });
    }, 1000);
  };
  render() {
    var Blogs = this.state.ALlBlogs.map((value, index) => {
      return (
        <div>
          <div>
            <div className="col xl4 l4 m6 s12">
              <p>
                <strong>{value.NAME}</strong>
                <tr></tr>
                <strong>{this.state.curTime}</strong>
              </p>
            </div>
            <div className="col xl8 l8 m6 s12">
              <blockquote>
                <h6>
                  <strong>{value.TITLE}</strong>
                </h6>
                <p>{value.BLOG}</p>
              </blockquote>
            </div>
          </div>
        </div>
      );
    });
    return (
      <div>
        <div className="card">
          <div className="createAccount">
            <button type="submit">Welcome To My All Blogs</button>
            <button type="submit" onClick={this.GoToLogin}>
              Click To Post
            </button>
            <button type="submit" onClick={this.GoToEdit}>
              Click To Edit
            </button>
            <button type="submit" onClick={this.GoToDelete}>
              Click To Delete
            </button>
            <button type="submit" onClick={this.GoToHome}>
              Back To Home Page
            </button>
          </div>
          {Blogs}
        </div>
      </div>
    );
  }
}
