import React from "react";
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/pages/Home";
import AllBlog from "./components/pages/AllBlogs/AllBlogs";
import PostBlog from "./components/pages/PostBlog/PostBlog";
import Login from "./components/pages/Login/Login";
import SignUp from "./components/pages/Login/SignUp";
import DeletePost from "./components/pages/DeletePost/DeletePost";
import EditPost from "./components/pages/EditBlog/EditBlog";
import Editpost from "./components/pages/EditBlog/EditPost";
import "./App.css";

function App() {
  return (
    <Router>
      <>
        <Route exact path="/" component={Home} />
        <Switch>
          <Route path="/AllBlog" component={AllBlog} />
          <Route path="/PostBlog" component={PostBlog} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
          <Route path="/deletePost" component={DeletePost} />
          <Route path="/editPost" component={EditPost} />
          <Route path="/edit" component={Editpost} />
        </Switch>
      </>
    </Router>
  );
}

export default App;
