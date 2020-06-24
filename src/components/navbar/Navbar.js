import React, { Component } from "react";
import { HashLink as Link } from "react-router-hash-link";

export default class Navbar extends Component {
  render() {
    return (
      <>
        <nav className="blue-grey">
          <div className="container">
            <Link to="/AllBlog" className="brand-logo">
              Go To Blogs
            </Link>
          </div>
        </nav>
      </>
    );
  }
}
