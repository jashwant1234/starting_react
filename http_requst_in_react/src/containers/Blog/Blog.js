import React, { Component } from "react";
import axios from "axios";
import "./Blog.css";
import Posts from "./Posts/Posts";
import NewPost from "./NewPost/NewPost"
import {Route,Link} from "react-router-dom";

class Blog extends Component {

 

  render() {
    return (
      <div>
        <header>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to={{ 
                pathname : "/new-post",
                hash : "#submit",
                search : "?quick-submit=true"
              }}>New Post</Link></li>
              <li><a href="#">Home</a></li>
            </ul>
          </nav>
        </header>
       {/* <Route path="/" exact render = {() => <h1>Blog</h1>} /> */}
       <Route path="/" exact component = {Posts}/>
       <Route path="/new-post" component = {NewPost}/>
       
      </div>
    );
  }
}

export default Blog;
