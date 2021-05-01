import React, { Component } from "react";
import axios from "axios";
import Post from "../../../components/Post/Post";
import "./Posts.module.css";
import FullPost from "../FullPost/FullPost";
import { Link,Route } from "react-router-dom";
export default class Posts extends Component {
  state = {
    posts: [],
  };
  componentDidMount() {
    axios
      .get("/posts")
      .then((res) => {
        const posts = res.data.slice(0, 6);
        const updatedPosts = posts.map((post) => {
          return { ...post, author: "Jashwant" };
        });
        this.setState({ posts: updatedPosts });
        console.log(res);
      })
      .catch((err) => {
        alert("Network error");
      });
  }

  render() {
    const posts = this.state.posts.map((post) => {
      return (
        <Link  key={post.id} to={"/posts/"+post.id}>
          {" "}
          <Post
            title={post.title}
            author={post.author}
            //   {...this.props} passing the route data to childe components
          />
        </Link>
      );
    });
    return (
      <div>
        <section className="Posts">{posts}</section>
        <Route path={this.props.match.url+"/:id"} exact component={FullPost} />
      </div>
    );
  }
}
