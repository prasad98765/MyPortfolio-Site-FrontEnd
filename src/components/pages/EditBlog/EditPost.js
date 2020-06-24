import React, { Component } from "react";
import "../Login/SignUp.css";
import TextField from "@material-ui/core/TextField";
var APICall = require("../../../congfiguration/CallAPI");
class EditPostBlog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: null,
      blog: null,
      value: null,
    };
    this.state.value = this.props.history.location.state;
  }

  handleSubmit = (e) => {
    e.preventDefault();
  };

  post = () => {
    var BlogPost = {
      EMAIL: this.state.value.obj.EMAIL,
      TITLE: this.state.title,
      BLOG: this.state.blog,
    };
    APICall.PostBlogs(BlogPost).then((res) => {
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
          <h1>Edit Your Blog</h1>
          <form onSubmit={this.handleSubmit} noValidate>
            <div className="email">
              <label htmlFor="email">Title</label>
              <input
                name="title"
                type="text"
                ref={(value) => {
                  this.input = value;
                }}
                defaultValue={this.state.value.obj.TITLE}
                onChange={this.handleChange}
              />
            </div>
            <div className="password">
              <label htmlFor="password">Write A Blog</label>
              <TextField
                name="blog"
                type="text"
                ref={(value) => {
                  this.input = value;
                }}
                defaultValue={this.state.value.obj.BLOG}
                onChange={this.handleChange}
              />
            </div>
            <div className="createAccount">
              <button type="submit" onClick={this.post}>
                Post
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default EditPostBlog;
