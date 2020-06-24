import React, { Component } from "react";
import "../Login/SignUp.css";
var APICall = require("../../../congfiguration/CallAPI");
class PostBlog extends Component {
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
    var BlogPost = {
      NAME: this.state.value.obj.name,
      EMAIL: this.state.value.obj.email,
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
          <h1>Post Your Blog</h1>
          <form onSubmit={this.handleSubmit} noValidate>
            <div className="email">
              <label htmlFor="email">Title</label>
              <input
                placeholder="Title"
                name="title"
                onChange={this.handleChange}
              />
            </div>
            <div className="password">
              <label htmlFor="password">Write A Blog</label>
              <input
                placeholder="Write A Blog"
                name="blog"
                onChange={this.handleChange}
              />
            </div>
            <div className="createAccount">
              <button type="submit">Post</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default PostBlog;
